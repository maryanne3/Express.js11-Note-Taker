const router = require("express").Router();
const fs = require("fs");

let nTaker = require("../db/db.json");
let id = nTaker.length + 1;

router.get("/nTaker", (req, res) => {
  res.json(nTaker);
});

router.post("/nTaker", (req, res) => {
  req.body.id = id;
  nTaker.push(req.body);

  fs.writeFileSync("./db/db.json", JSON.stringify(nTaker));
  res.json(nTaker);
});

router.delete("/nTaker/:id", (req, res) => {
  let newTaker = nTaker.filter((nTaker) => nTaker.id !== id);
  nTaker = newTaker;
  fs.writeFileSync("./db/db.json", JSON.stringify(newTaker));
  res.json(true);
});

module.exports = router;