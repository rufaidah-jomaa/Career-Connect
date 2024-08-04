import { roles } from "../../middleware/auth.middleware.js";

export const endPoints={
    getAdmins:[roles.Super_Admin],
    block:[roles.Super_Admin],
    unblock:[roles.Super_Admin],
    add:[roles.Super_Admin],
    remove:[roles.Super_Admin]
}