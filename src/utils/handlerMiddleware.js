export const unknownEndpoint = (_req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

export const errorHandler = (error, _req, res, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  }

  next(error);
};
