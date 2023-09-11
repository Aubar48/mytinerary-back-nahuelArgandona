import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().messages({
        "any.required": "name is required",
        "string.empty": "name is required"
    }),
    lastName: joi.string().required().messages({
        "any.required": "lastName is required",
        "string.empty": "lastName is required"
    }),
    mail: joi.string().required().messages({
        "any.required": "mail is required",
        "string.empty": "mail is required"
    }),
    photo: joi.string().required().messages({
        "any.required": "photo is required",
        "string.empty": "photo is required"
    }),
    password: joi.string().required().min(8).max(40).messages({
        'string.min': "password must have at least 8 characters please!",
        "string.max": "password must be less than 40 characters please!",
        "any.required": "password is required",
        "string.empty": "password is required"
    }),
    country: joi.string().required().required().messages({
        "any.required": "country is required",
        "string.empty": "country is required"
    })
})

export default registerSchema