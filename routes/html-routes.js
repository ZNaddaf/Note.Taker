// NPMs and Variables
const path = require("path");
const router = require("express").Router();

// Sends the user to the notes page
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Sends the user to the main page
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/dist/compIndex.html"));
});

module.exports = router;