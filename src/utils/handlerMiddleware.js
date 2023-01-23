export const unknownEndpoint = (_req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const errorsWithMessage = ["ValidationError", "MongoServerError"];

const getIndividualErrorMessage = ({ type, path, minlength }) => {
  if (type === "minlength") {
    return `The '${path}' field must have at least ${minlength} characters`;
  } else if (type === "required") {
    return `The '${path}' field is required`;
  }
};

const getErrorsMessages = ({ errors }) => {
  const errorsProperties = Object.values(errors);
  return errorsProperties.map(
    (error) => getIndividualErrorMessage(error.properties) || error.message
  );
};

export const errorHandler = (error, _req, res, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  }
  if (errorsWithMessage.includes(error.name)) {
    return res.status(400).json({ error: getErrorsMessages(error) });
  }

  next(error);
};
