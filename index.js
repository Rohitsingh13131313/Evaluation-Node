let express = require("express");


let app = express()

app.get("/",(req,res)=>{
    res.send("This is home page")
})
app.post("/data",(req,res)=>{
    res.body("This is data page")
})
app.put("/about",(req,res)=>{
    res.send("This is about page")
})
app.delete("/delete",(req,res)=>{
    res.send("This is delete page")
})


app.listen(3000,()=>{
    console.log("Server is start http://localhost:3000")
})