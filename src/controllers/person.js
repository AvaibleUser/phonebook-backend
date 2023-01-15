import { ContentMissingError } from "../errors/routesErrors.js";
import personModel from "../model/person.js";

export const getPhonebookSize = async () => {
  const size = await personModel.count({});
  return size;
};

const getPhonebook = async () => {
  const persons = await personModel.find({});
  return persons;
};

const getPerson = async (id) => {
  const person = await personModel.findById(id);
  return person;
};

const addPerson = async ({ name, number }) => {
  if (!name || !number) {
    throw new ContentMissingError("The name or the number are missed");
  }

  const person = await personModel.create({ name, number });
  return person;
};

const updatePerson = async (id, { name, number }) => {
  if (!name || !number) {
    throw new ContentMissingError("The name or the number are missed");
  }

  const newInfo = { name, number };
  const updatedPerson = await personModel.findByIdAndUpdate(id, newInfo, {
    new: true,
  });

  if (updatedPerson) {
    throw new ContentMissingError("The name or the number are missed");
  }

  return updatedPerson;
};

const removePerson = async (id) => {
  return await personModel.findByIdAndDelete(id);
};

const personController = {
  getPhonebookSize,
  getPhonebook,
  getPerson,
  addPerson,
  updatePerson,
  removePerson,
};

export default personController;
