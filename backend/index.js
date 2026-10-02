const express = require("express");
const cors = require("cors");

const app= express();

app.use(express.json());
app.use(cors());
app.get("/api/health",(req, res)=>{
    res.status(200).json({
        status:"ok",
        message: "CodeLens API is running"
    })
})

app.listen(3000, ()=>{
    console.log("listening on port 3000");
});

