import { JWK, JWT } from "jose";

const key = JWK.asKey(JSON.parse(process.env.KEY));

export default async (req, res) => {
  var error = true;
  var verification;
  if (req.method === "POST") {
    if (req.body && req.body.token) {
      error = false;
      try {
        verification = JWT.verify(req.body.token, key, {
          issuer: "https://bamboosted.com"
        });
      } catch {
        verification = false;
      }
    } else {
      error = "Bad request";
    }
    res.status(error ? 400 : 200).json({ error, verification });
  } else {
    res.status(405).json({ error: "Only POST method allowed" });
  }
};
