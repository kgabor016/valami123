const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let utolsoAdat = {};

// Egyszerű teszt, ha megnyitod a böngészőben
app.get("/", (req, res) => {
  res.send("Szerver működik 🚀");
});

// POST route az adatok fogadására
app.post("/", (req, res) => {
  utolsoAdat = req.body;
  console.log("Kapott adat:", utolsoAdat);
  res.json({ ok: true });
});

// GET route a display-nek
app.get("/adat", (req, res) => {
  res.json(utolsoAdat);
});

app.listen(5000, () => {
  console.log("Fut: http://localhost:5000");
});