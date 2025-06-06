import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { mongo } from "mongoose";
import User from "./models/UserInfo.js";

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

export async function registerUser(req, res) {
  const { username, pwd, email, name } = req.body;
  if (!username || !pwd) {
    return res
      .status(400)
      .send("Bad request: Invalid input data.");
  }
  const existing = await User.findOne({ username });
  if (existing) {
    return res.status(409).send("Username already taken");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(pwd, salt);
  const newUser = new User({
    username,
    name: name || "",
    email: email || "",
    passwordToken: hashedPassword
  });

  await newUser.save();
  const token = await generateAccessToken(username);
  return res.status(201).json({ token });
}

export async function loginUser(req, res) {
  const { username, pwd } = req.body;
  if (!username || !pwd) {
    return res.status(400).send("Bad request");
  }
  const userDoc = await User.findOne({ username });
  if (!userDoc) {
    return res.status(401).send("Unauthorized");
  }

  const matched = await bcrypt.compare(
    pwd,
    userDoc.passwordToken
  );
  if (!matched) {
    return res.status(401).send("Unauthorized");
  }
  const token = await generateAccessToken(username);
  return res.status(200).json({ token });
}

export function authenticateUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).end();

  jwt.verify(
    token,
    process.env.TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(401).end();
      }
      req.user = decoded;
      next();
    }
  );
}
