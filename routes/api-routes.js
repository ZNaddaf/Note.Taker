// NPMs and Variables
const router = require("express").Router();
const store = require("../db/store");
const path = require("path");

// Get notes from the router
router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});


// Post notes to the router
router.post("/notes", function (req, res) {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// Delete notes from the router
router.delete("/notes/:id", function (req, res) {
    store
        .delNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;