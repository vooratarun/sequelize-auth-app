const validate = (schema, property = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,   // return all errors
      allowUnknown: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((d) => ({
          field: d.path.join("."),
          message: d.message
        }))
      });
    }

    req[property] = value; // sanitized data
    next();
  };
};

module.exports = validate;
