const codeAnalyzer = require("./analyzer.js");

const express = require("express");
const cors = require("cors");

const app= express();

app.use(express.json());
app.use(cors());


app.post("/api/analyze",(req, res)=>{
    const code = req.body.code;
    
    //if there is no code
    if(code.trim()==="" || code===undefined){
        return res.status(400).json({
            message:"Code is required."
        })
    }

    const warnings = codeAnalyzer(code);

    res.status(200).json({
        warnings,
        message: "Code received"
    })
})

app.listen(3000, ()=>{
    console.log("listening on port 3000");
});

