import mongoose from "mongoose";
import Person from "./src/model/person.js";

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password> <name> <number>"
  );
  process.exit(1);
}

const { 2: password, 3: name, 4: number } = process.argv;

const url = `mongodb+srv://caveman:${password}@cluster0.g5h1sgh.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url);

if (!name || !number) {
  const people = await Person.find({});

  console.log("phonebook:");
  for (const person of people) {
    console.log(person.name, person.number);
  }

  mongoose.connection.close();
  process.exit(1);
}

const person = await Person.create({ name, number });
console.log(`added ${person.name} number ${person.number} to phonebook`);

mongoose.connection.close();
