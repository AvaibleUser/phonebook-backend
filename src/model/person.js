import mongoose from "mongoose";
const { Schema, model } = mongoose;

const personSchema = new Schema({
  name: String,
  number: String,
});

personSchema.set('toJSON', {
  transform: (_doc, prevPerson) => {
    prevPerson.id = prevPerson._id.toString()
    delete prevPerson._id
    delete prevPerson.__v
  }
})

const personModel = model("Person", personSchema);

export default personModel;
