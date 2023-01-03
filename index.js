const express = require("express");
const app = express();

const PORT = 3001;

const personsRoutes = require("./src/routes/persons");

app.use("/api", personsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
