import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(4).max(40).messages({
        'string.min': "name must have at least 4 characters please!",
        "string.max": "name must be less than 40 characters please!",
        "any.required": "name is required",
        "string.empty": "name is required"
    }),
    mail: joi.string().required().messages({
        "any.required": "mail is required",
        "string.empty": "mail is required"
    }),
    password: joi.string().required().messages({
        "any.required": "password is required",
        "string.empty": "password is required"
    }),
    country: joi.string().required().required().messages({
        "any.required": "country is required",
        "string.empty": "country is required"
    }),
    lastName: joi.string().min(4).max(40).empty("").messages({
        'string.min': "last name must have at least 4 characters please!",
        "string.max": "last name must be less than 40 characters please!",

    })
})

export default registerSchema