const express=require("express");
const router=express.Router();
const userRouter=require("./userRouter.js")
router.use("/user",userRouter);
module.exports={
    router,
    accountRouter
}
// /api/v1/user
// /api/v1/transaction ...