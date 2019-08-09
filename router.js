const express = require("express");

const router = express.Router();

const cTable = require('console.table');

let peopleId = 2;


let people = [
    { id: 1, name: "Seymore Buttz" },
    { id: 2, name: "Justin Time" }
];

let chores = [
    {
        assignedTo: 1,
        choreId: 1,
        description: "chores description",
        notes: "voluntary notes",
        completed: false
    },
    {
        assignedTo: 1,
        choreId: 2,
        description: "Seed description 2",
        notes: "optional notes 2",
        completed: true
    }
];

router.get("/:id", (req, res) => {
    const id = req.params.id - 1;
    if (people[id]) {
        console.log("That/'s the spot!");
        let personChores = chores.filter(chore => chore.assignedTo == id);
        console.log("Chores: ", personChores);
        personChores.length > 0
            ? res.status(200).json(personChores)
            : res.status(200).json({});
    } else {
        console.table("Bad Bad Bad!");
        res.status(400).json({ message: "These are not the droids you are looking for." });
    }
});

router.get("/:id/chores", (req, res) => {
    const id = req.params.id - 1;
    console.log(people[id]);
});

router.post("/", (req, res) => {
    chores.push(req.body);
});

router.get("/", (req, res) => { });

router.put("/", (req, res) => { });

router.delete("/", (req, res) => { });

module.exports = router;