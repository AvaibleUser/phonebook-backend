import { getPhonebookSize } from "../controllers/person.js";
import { Router } from "express";
const infoRoute = Router();

infoRoute.get("/info", (req, res) => {
  const amount = getPhonebookSize();
  const date = new Date();

  const personsInfo = `<p>Phonebook has info for ${amount} people</p> `;
  const dateInfo = `<p>${date}</p>`;

  res.send(personsInfo + dateInfo);
});

export default infoRoute;
