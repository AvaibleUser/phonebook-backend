import personModel from "../model/person.js";

export const getPhonebookSize = async () => {
  const size = await personModel.count({});
  return size;
};

export const getPhonebook = async () => {
  const persons = await personModel.find({});
  return persons;
};

export const getPerson = async (id) => {
  const person = await personModel.findById(id);
  return person;
};

export const addPerson = async ({ name, number }) => {
  if (!name || !number) {
    return;
  }

  const person = await personModel.create({ name, number });
  return person;
};

const personController = {
  getPhonebookSize,
  getPhonebook,
  getPerson,
  addPerson,
};

export default personController;
