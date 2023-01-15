import { Router } from "express";
const personRoutes = Router();

import phonebook from "../utils/personsData.js";
import personController from "../controllers/person.js";

personRoutes.get("/", async (_req, res) => {
  const person = await personController.getPhonebook();
  res.json(person);
});

personRoutes.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const person = await personController.getPerson(id);

    if (person) {
      res.json(person);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

personRoutes.post("/", async (req, res) => {
  const newPerson = await personController.addPerson(req.body);

  if (!newPerson) {
    return res.status(400).json({ error: "content missing" });
  }

  res.json(newPerson);
});

personRoutes.delete("/:id", async (req, res) => {
  const id = req.params.id;

  phonebook.persons = phonebook.persons.filter((person) => person.id !== id);
  res.status(204).end();
});

export default personRoutes;
