import mongoose from "mongoose";
const { Schema, model } = mongoose;

const personSchema = new Schema({
  name: { type: String, minLength: 3, required: true, unique: true },
  number: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /\d{2,3}-\d{4,}/.test(value) && value.length > 7,
      message: ({ value }) => `'${value}' is not a valid phone number`,
    },
  },
});

personSchema.set("toJSON", {
  transform: (_doc, prevPerson) => {
    prevPerson.id = prevPerson._id.toString();
    delete prevPerson._id;
    delete prevPerson.__v;
  },
});

const personModel = model("Person", personSchema);

export default personModel;
