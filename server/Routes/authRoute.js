import express from "express";
import {registerController,loginController,forgetPasswordController,updateProfileController,getOrdersController,getAllOrdersController,orderStatusController} from "../controllers/authController.js";
import {requrieSignIn,isAdmin} from "../middlewares/authMiddleware.js"
import testController from "../controllers/testController.js";

const router = express.Router();

//routing
//Register || POST
router.post('/register',registerController)

//login || POST
router.post('/login',loginController)

//Forget Password || POST
router.post('/forget-password',forgetPasswordController)

router.get('/getAll',requrieSignIn,isAdmin,testController)

//procted route auth
router.get('/user-auth',requrieSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

router.get('/admin-auth',requrieSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

//update profile
router.put("/profile", requrieSignIn, updateProfileController);

//orders
router.get("/orders", requrieSignIn, getOrdersController);

//all orders
router.get("/all-orders", requrieSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requrieSignIn,
  isAdmin,
  orderStatusController
);

export default router;