import Joi from 'joi'
import { generalValidation } from '../../middleware/validation.js'

export const registerSchema=
  Joi.object({
    userName:Joi.string().pattern(/^[a-zA-Z0-9_-]{3,20}$/).required(),
    email: generalValidation.email,
    password: generalValidation.password,
    cPassword: Joi.valid(Joi.ref('password')).required(),
})

export const loginSchema=Joi.object({
    email: generalValidation.email,
    password: generalValidation.password
})

export const sendCodeSchema= Joi.object({
    email:generalValidation.email
})

export const forgotPasswordSchema= Joi.object({
    email: generalValidation.email,
    password: generalValidation.password,
    code:Joi.string().length(6).required()
})