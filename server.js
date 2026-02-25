const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Engedélyezés minden origin számára (biztonságosabb a teszthez)
app.use(cors({
  origin: '*' // bárhonnan érkező kérést engedélyez
}));

app.use(express.json());

let utolsoAdat = {};

// Statikus fájlok
app.use(express.static(path.join(__dirname, "public")));

// POST adatok fogadására
app.post("/", (req, res) => {
  utolsoAdat = req.body;
  console.log("Kapott adat:", utolsoAdat);
  res.json({ ok: true });
});

// GET a display-nek
app.get("/adat", (req, res) => {
  res.json(utolsoAdat);
});

// Hallgatás minden interfészen
app.listen(5000, "0.0.0.0", () => {
  console.log("Fut minden hálózaton: http://0.0.0.0:5000");
});