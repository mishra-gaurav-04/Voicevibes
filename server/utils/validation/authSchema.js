const Joi = require('joi');

const registerSchema = Joi.object({
    email : Joi.string().email().required(),
    password : Joi.string().required().min(8),
    username : Joi.string().required()
})

module.exports = {
    registerSchema
}