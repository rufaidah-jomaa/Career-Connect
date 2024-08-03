import { Router } from "express";
import * as controller from './admin.controller.js'
import { asyncHandler } from "../../services/errorHandling.js";
const router = Router()

router.get('/',asyncHandler(controller.getAdmins))
export default router;