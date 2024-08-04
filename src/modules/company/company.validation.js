import Joi from 'joi'
import { generalValidation } from '../../middleware/validation.js'

export const createSchema =
  Joi.object({
    companyName:Joi.string().required(),
    location:Joi.string().required(),
    phone:Joi.string().required(),
    email:Joi.string().email().required(),
    website_url:Joi.string().required(),
    industry:Joi.string().required(),
    description:Joi.string().required(),
    logo:generalValidation.image,
    founded:Joi.date().required()

})
export const updateSchema=
Joi.object({
  companyName:Joi.string(),
  location:Joi.string(),
  phone:Joi.string(),
  email:Joi.string().email(),
  website_url:Joi.string(),
  industry:Joi.string(),
  description:Joi.string(),
  logo:generalValidation.image,
  founded:Joi.date()

})

export const deleteSchema=
  Joi.object({
    id:generalValidation.id
})
