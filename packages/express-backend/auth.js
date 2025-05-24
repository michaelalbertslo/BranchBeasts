import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const creds = []; // Replace with DB later

function generateAccessToken(username) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { username },
      process.env.TOKEN_SECRET,
      { expiresIn: "1d" },
      (err, token) => (err ? reject(err) : resolve(token))
    );
  });
}

export function registerUser(req, res) {
  const { username, pwd } = req.body;
  if (!username || !pwd) {
    return res.status(400).send("Bad request: Invalid input data.");
  }
  if (creds.find((c) => c.username === username)) {
    return res.status(409).send("Username already taken");
  }

  bcrypt.genSalt(10)
    .then((salt) => bcrypt.hash(pwd, salt))
    .then((hashedPassword) => {
      generateAccessToken(username).then((token) => {
        creds.push({ username, hashedPassword });
        res.status(201).send({ token });
      });
    });
}

export function loginUser(req, res) {
  const { username, pwd } = req.body;
  const user = creds.find((c) => c.username === username);
  if (!user) return res.status(401).send("Unauthorized");

  bcrypt.compare(pwd, user.hashedPassword)
    .then((matched) => {
      if (matched) {
        generateAccessToken(username).then((token) =>
          res.status(200).send({ token })
        );
      } else {
        res.status(401).send("Unauthorized");
      }
    })
    .catch(() => res.status(401).send("Unauthorized"));
}

export function authenticateUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).end();

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (decoded) next();
    else res.status(401).end();
  });
}
