import { Router } from "express";
import * as controller from './admin.controller.js'
import { asyncHandler } from "../../services/errorHandling.js";
import validation from "../../middleware/validation.js";
import * as schema from './admin.validation.js'
import { endPoints } from "./admin.role.js";
import { auth } from "../../middleware/auth.middleware.js";
const router = Router()

router.get('/',auth(endPoints.getAdmins),asyncHandler(controller.getAdmins))
router.patch('/block',auth(endPoints.block),validation(schema.blockSchema),asyncHandler(controller.blockAdmin))
router.patch('/unblock',auth(endPoints.unblock),validation(schema.unblockSchema),asyncHandler(controller.unBlockAdmin))
router.patch('/Add',auth(endPoints.add),validation(schema.addSchema),asyncHandler(controller.addAdmin))
router.patch('/remove',auth(endPoints.remove),validation(schema.removeSchema),asyncHandler(controller.removeAdmin))
export default router;