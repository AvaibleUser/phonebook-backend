import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3001;

import personsRoutes from "./src/routes/persons";
import infoRoute from "./src/routes/info";

const morganFormat =
  ":method :url :status :res[content-length] - :response-time ms :body";

morgan.token("body", ({ body }) => (body?.name ? JSON.stringify(body) : " "));

app.use(express.static("static"));
app.use(cors());
app.use(express.json());
app.use(morgan(morganFormat));

app.use("/api/persons", personsRoutes);
app.use("/", infoRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
