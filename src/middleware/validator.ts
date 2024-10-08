import { RequestHandler } from "express";
import * as yup from "yup";

export const validate = (schema: any): RequestHandler => {
  // bura middleware de kullanılacağı için böyle
  return async (req, res, next) => {
    // body boş mu kontrol et
    if (!req.body) return res.json({ error: "Empty body is not accepted" });

    const schemaToValidate = yup.object({
      body: schema,
    });
    try {
      await schemaToValidate.validate(
        {
          body: req.body,
        },
        {
          abortEarly: true,
        }
      );

      next();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        res.status(422).json({ error: error, status: req.body });
      }
    }
  };
};
