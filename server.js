const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// CORS engedélyezése minden hálózatról
app.use(cors({
  origin: '*' // bármely gép, bármilyen origin
}));

app.use(express.json());

let utolsoAdat = {};

// Statikus fájlok kiszolgálása
app.use(express.static(path.join(__dirname, "public")));

// POST a küldő oldaltól
app.post("/", (req, res) => {
  utolsoAdat = req.body;
  console.log("Kapott adat:", utolsoAdat);
  res.json({ ok: true });
});

// GET a display oldalnak
app.get("/adat", (req, res) => {
  res.json(utolsoAdat);
});

// Hallgatás minden hálózati interfészen (nem csak localhost)
app.listen(5000, "0.0.0.0", () => {
  console.log("Szerver fut minden hálózaton: http://0.0.0.0:5000");
});