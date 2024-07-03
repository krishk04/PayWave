const express = require("express");
const app=express();
const PORT=3000;
const cors=require("cors");
const bodyParser=require("body-parser");
app.use(cors());
app.use(express.json());
const {router}=require("./routes/index.js");
app.use("/api/v1",router);


app.listen(3000,()=>{
    console.log(`server running on port ${PORT}`)
});

