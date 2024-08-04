import connectDB from "./DB/connection.js";
import cors from 'cors'
import { globalErrorHandling } from "./src/services/errorHandling.js";
import authRouter from './src/modules/auth/auth.router.js'
import adminRouter from './src/modules/admin/admin.router.js'
import companyRouter from './src/modules/company/company.router.js'
const initApp = (express, app) => {
    connectDB();
    app.use(cors());
    app.use(express.json());
    app.get("/", (req, res) => {
      return res.status(200).json("welcome");
    });
    app.use("/auth", authRouter);
    app.use("/admin",adminRouter)
    app.use("/company", companyRouter);
    
   
    app.use("*", (req, res) => {
      return res.status(404).json("Page not found");
    });
    app.use(globalErrorHandling)
  };
  export default initApp;
  