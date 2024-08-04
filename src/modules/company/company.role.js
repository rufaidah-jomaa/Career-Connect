import { roles } from "../../middleware/auth.middleware.js";

export const endPoints={
    create:[roles.Super_Admin,roles.Admin],
    update:[roles.Super_Admin,roles.Admin],
    delete:[roles.Super_Admin,roles.Admin],
   
}