import Joi from 'joi'
import { generalValidation } from '../../middleware/validation.js'

export const blockSchema =
  Joi.object({
    id:generalValidation.id
})
export const unblockSchema=
  Joi.object({
    id:generalValidation.id
})
export const addSchema=
  Joi.object({
    id:generalValidation.id
})
export const removeSchema=
  Joi.object({
    id:generalValidation.id
})
