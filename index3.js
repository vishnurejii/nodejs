import express from "express"
const app=express()

app.get("/",(req,res)=>{
    res.send("hello welcome")
})
app.get("/home",(req,res)=>{
    res.send("hello welcome to home")
})
app.listen(8080,()=>{
    console.log("server listening")
})
