import morgan from "morgan";

const morganFormat =
  ":method :url :status :res[content-length] - :response-time ms :body";

morgan.token("body", ({ body }) => (body?.name ? JSON.stringify(body) : " "));

export default morganFormat;
