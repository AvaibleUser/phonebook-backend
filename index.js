const express = require("express");
const app = express();

const PORT = 3001;

const personsRoutes = require("./src/routes/persons");
const infoRoute = require("./src/routes/info");

app.use("/api/persons", personsRoutes);
app.use("/", infoRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
