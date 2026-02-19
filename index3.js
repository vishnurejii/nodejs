import express from "express"
const app=express()
app.get("/home",(req,res)=>{
    res.send("hello welcome to home")
})
app.listen(8080)
