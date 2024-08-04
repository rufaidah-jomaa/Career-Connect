import {Router} from 'express'
import * as controller from './company.controller.js'
import { asyncHandler } from '../../services/errorHandling.js';
import { auth } from '../../middleware/auth.middleware.js';
import { endPoints } from './company.role.js';
import validation from '../../middleware/validation.js';
import * as schema from './company.validation.js'
const router = Router()

router.get('/', asyncHandler( controller.getCompanies))
router.post('/create',auth(endPoints.create),validation(schema.createSchema),asyncHandler(controller.createCompany))
router.patch('/update/:id',auth(endPoints.update),validation(schema.updateSchema),asyncHandler(controller.updateCompany))
router.delete('/delete/:id',auth(endPoints.delete),asyncHandler(controller.deleteCompany))

export default router;