const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = 3001;

const personsRoutes = require("./src/routes/persons");
const infoRoute = require("./src/routes/info");

const morganFormat =
  ":method :url :status :res[content-length] - :response-time ms :body";

morgan.token("body", ({ body }) => (body?.name ? JSON.stringify(body) : " "));

app.use(express.json());
app.use(morgan(morganFormat));

app.use("/api/persons", personsRoutes);
app.use("/", infoRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
