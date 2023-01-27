import { Router } from "express";
const personRoutes = Router();

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

personRoutes.post("/", async (req, res, next) => {
  try {
    const newPerson = await personController.addPerson(req.body);
    res.json(newPerson);
  } catch (error) {
    next(error);
  }
});

personRoutes.put("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const updatedPerson = await personController.updatePerson(id, req.body);

    if (!updatedPerson) {
      res.status(404).end();
      return;
    }
    res.json(updatedPerson);
  } catch (error) {
    next(error);
  }
});

personRoutes.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await personController.removePerson(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default personRoutes;
