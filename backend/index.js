const express = require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const PORT=3000;

const bodyParser=require("body-parser");

app.use(express.json());
const router=require("./routes/index.js");
app.use("/api/v1",router);


app.listen(3000,()=>{
    console.log(`server running on port ${PORT}`)
});

