const express = require("express");
const app=express();
const PORT=3000;
const {router}=require("./routes/index.js");
app.use("/api/v1",router);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});

