import {Router} from 'express'
import * as controller from './auth.controller.js'
import { asyncHandler } from '../../services/errorHandling.js'
import * as schema from './auth.validation.js';
import validation from '../../middleware/validation.js';
const router = Router()

router.get('/',controller.getauth)
router.post('/register',validation(schema.registerSchema),asyncHandler(controller.register))
router.post('/login',validation(schema.loginSchema),asyncHandler(controller.login))
router.get('/confirmEmail/:token',asyncHandler(controller.confirmEmail))
router.get('/newconfirmEmail/:token',asyncHandler(controller.newconfirmEmail))
router.patch('/sendCode',validation(schema.sendCodeSchema),asyncHandler(controller.sendCode))
router.patch('/forgotPassword',validation(schema.forgotPasswordSchema),asyncHandler(controller.forgotPassword))
export default router;
