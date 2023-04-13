const router = require("express").Router();
const fs = require("fs");

let notes = require("../database/db.json");
let id = notes.length + 1;

// Get notes 
router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  req.body.id = id;
  notes.push(req.body);

  fs.writeFileSync("./database/db.json", JSON.stringify(notes));
  res.json(notes);
});

// Delete 
router.delete("/notes/:id", (req, res) => {
  let newNotes = notes.filter((notes) => notes.id !== id);
  notes = newNotes;
  fs.writeFileSync("./database/db.json", JSON.stringify(newNotes));
  res.json(true);
});

module.exports = router;