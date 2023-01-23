import personModel from "../model/person.js";

const updateConfig = { new: true, runValidators: true, context: "query" };

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
  const person = await personModel.create({ name, number });
  return person;
};

const updatePerson = async (id, { name, number }) => {
  const newInfo = { name, number };

  const updatedPerson = await personModel.findByIdAndUpdate(
    id,
    newInfo,
    updateConfig
  );

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
