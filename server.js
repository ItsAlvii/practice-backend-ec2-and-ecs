import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) console.error("Database connection failed:", err);
  else console.log("✅ Connected to MySQL");
});

app.get("/", (req, res) => {
  res.send("Backend running on EC2!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});

