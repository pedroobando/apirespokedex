"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationSchema = void 0;
const Joi = require("joi");
exports.JoiValidationSchema = Joi.object({
    MONGODB_URL: Joi.required(),
    PORT: Joi.number().default(3003),
    NODE_ENV: Joi.string().default('dev'),
    DEFAULT_LIMIT: Joi.number().default(7),
});
//# sourceMappingURL=joi.validation.js.map