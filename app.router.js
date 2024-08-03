import connectDB from "./DB/connection.js";
import cors from 'cors'
import { globalErrorHandling } from "./src/services/errorHandling.js";
import authRouter from './src/modules/auth/auth.router.js'
const initApp = (express, app) => {
    connectDB();
    app.use(cors());
    app.use(express.json());
    app.get("/", (req, res) => {
      return res.status(200).json("welcome");
    });
    app.use("/auth", authRouter);
    /*app.use("/category", categoryRouter);
    app.use('/subcategory',subCategoryRouter)
    app.use("/product", productRouter);
    app.use('/cart',cartRouter)
    app.use('/coupon',couponRouter)
    app.use('/order',orderRouter)
    app.use("/user", userRouter);*/
   
    app.use("*", (req, res) => {
      return res.status(404).json("Page not found");
    });
    app.use(globalErrorHandling)
  };
  export default initApp;
  