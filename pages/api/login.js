import { JWK, JWT } from "jose";

const login = process.env.LOGIN;
const password = process.env.PASSWORD;
const key = JWK.asKey(JSON.parse(process.env.KEY));

export default async (req, res) => {
  var error = true;
  var token;
  if (req.method === "POST") {
    if (
      req.body &&
      req.body.login === login &&
      req.body.password === password
    ) {
      error = false;
      token = JWT.sign({ admin: true }, key, {
        audience: [req.body.login],
        issuer: "https://bamboosted.com",
        expiresIn: "1 minute",
        header: {
          typ: "JWT"
        }
      });
    } else {
      error = "Wrong credentials";
    }
    res.status(error ? 401 : 200).json({ error, token });
  } else {
    res.status(405).json({ error: "Only POST method allowed" });
  }
};
