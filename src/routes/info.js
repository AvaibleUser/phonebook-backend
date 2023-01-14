import { Router } from "express";
const router = Router();

import persons from "../utils/personsData";

router.get("/info", (req, res) => {
  const amount = persons.length;
  const date = new Date();

  const personsInfo = `<p>Phonebook has info for ${amount} people</p> `;
  const dateInfo = `<p>${date}</p>`;

  res.send(personsInfo + dateInfo);
});

export default router;
