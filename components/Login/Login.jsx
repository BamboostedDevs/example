import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import crypto from "crypto";
import Link from "next/link";

const Input = styled.input`
  border-color: ${({ error }) => (error ? "red" : "initial")};
`;

const Token = styled.div`
  width: 50vw;
  overflow-x: auto;
`;

const Login = () => {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [error, setError] = useState(false);
  const [token, setToken] = useState();
  const [verification, setVerification] = useState(false);
  const isInitialMount = useRef(true);
  var timeout;

  useEffect(() => {
    const _token = window.localStorage.getItem("token");
    _token && setToken(_token);
  }, []);

  const verify = async () => {
    console.log("verify");
    try {
      const response = await axios.post("/api/validate", {
        token
      });
      const verif = response.data.verification;
      setVerification(verif);
      if (verif) {
        timeout = setTimeout(verify, verif.exp * 1000 - Date.now() + 10);
        window.localStorage.setItem("token", token);
      }
    } catch (error) {
      setVerification(false);
      window.localStorage.removeItem("token");
    }
  };

  const handleChange = e => {
    setError(false);
    e.target.type === "password"
      ? setPassword(e.target.value)
      : setLogin(e.target.value);
  };

  const throwError = error => {
    setError(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const hashedPassword = crypto
        .createHash("sha256")
        .update(password)
        .digest("base64");
      const response = await axios.post("/api/login", {
        login,
        password: hashedPassword
      });
      if (response.data.error) {
        throwError(response.data.error);
      } else {
        setToken(response.data.token);
      }
    } catch (error) {
      throwError(error);
    }
    setLogin("");
    setPassword("");
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      verify();
    }
  }, [token]);

  return (
    <>
      <Link href="/">Main</Link>
      {!verification && (
        <form onSubmit={handleSubmit}>
          <Input
            error={error}
            value={login}
            type="login"
            onChange={handleChange}
          />
          <Input
            error={error}
            value={password}
            type="password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      )}
      {token && (
        <>
          <div>Token:</div>
          <Token>{token}</Token>
        </>
      )}
      {verification && (
        <>
          <div>Verified</div>
          <div>Privilinges: {verification.admin ? "admin" : "user"}</div>
          <div>Expires: {String(new Date(verification.exp * 1000))}</div>
          <button onClick={verify}>Check</button>
        </>
      )}
    </>
  );
};

export default Login;
