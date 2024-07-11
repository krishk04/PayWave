const express=require("express");
const zod=require("zod");
const router=express.Router();
const {authMiddleware}=require("../middleware.js");
const {User, Account} = require("../db.js");
const  {JWT_SECRET} = require("../config.js");
const jwt=require("jsonwebtoken");
router.use(express.json());
const userSchema=zod.object({
    username:zod.string().email(),
    password:zod.string().min(6),
    firstName:zod.string(),
    lastName:zod.string()
});
const signinSchema=zod.object({
    username:zod.string().email(),
    password:zod.string()
})
const updateBody=zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
})
router.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const response=userSchema.safeParse({
        username:username,
        password:password,
        firstName:firstName,
        lastName:lastName
    });
    if(!response.success)
        {
            return res.status(411).json({
                message:"Email already taken/incorrect inputs"
            })
        }
    const existingUser=await User.findOne({
        username:username
    });
    if(existingUser)
        {
            return res.status(411).json({
                message:"Email already taken"
            })
        }
    
        const user=await User.create({
              username:username,
              password:password,
              firstName:firstName,
              lastName:lastName
        })

        
        const userId=user._id;

        await Account.create({
            userId,
            balance: 1+ Math.random()*10000
        })
        const token=jwt.sign({userId},JWT_SECRET);
        res.json({
            message:"User created successfully",
            token:token
        })
    
     
})
router.post("/signin",async(req,res)=>{
    
    
    
    const username=req.body.username;
    const password=req.body.password;
    const response=signinSchema.safeParse({
        username:username,
        password:password
    })
    if(!response.success)
    {
        return res.status(403).json({
            message:"Invalid inputs"
        })
    }
    const existingUser=User.findOne({
        username:username,
        password:password
    })
    if(existingUser)
    {
        const token=jwt.sign({userId:existingUser._id},JWT_SECRET);
        res.json({
            token:token
        })
        return;
        
    }
    res.status(411).json({
        message:"Error while logging in"
    })
})
router.put("/",authMiddleware,async(req,res)=>{
    
    
    const response=updateBody.safeParse(req.body);
    if(!response.success)
    {
        return res.status(411).json({
            message:"Error while updating information"
        })

    }
    await User.updateOne({
        id:req.userId
    },req.body)
    res.json({
        message:"User updated successfully"
    })
        
})
router.get('/bulk',async(req,res)=>{
    const filter=req.query.filter||"";
    const users=await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })

})
module.exports=router;