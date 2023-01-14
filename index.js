import express from "express";
import morgan from "morgan";
import cors from "cors";

import connectMongo from "./src/utils/connectMongo.js";
import morganFormat from "./src/utils/morganConfigs.js";

import personRoutes from "./src/routes/person.js";
import infoRoute from "./src/routes/info.js";

const app = express();

// adding middleware
app.use(express.static("static"));
app.use(cors());
app.use(express.json());
app.use(morgan(morganFormat));

// adding routes
app.use("/api/persons", personRoutes);
app.use("/", infoRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
