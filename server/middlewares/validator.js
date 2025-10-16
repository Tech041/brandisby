export const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      // ZodError: format validation issues
      if (err?.errors) {
        return res.status(400).json({
          errors: err.errors.map((e) => ({
            field: e.path.join("."),
            code: e.code,
            message: e.message,
          })),
        });
      }

      // Fallback: unexpected error format
      let fallback;
      try {
        fallback = JSON.parse(err.message);
      } catch {
        fallback = { message: err.message };
      }

      return res
        .status(400)
        .json({ errors: Array.isArray(fallback) ? fallback : [fallback] });
    }
  };
};
