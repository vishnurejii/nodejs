import express from "express"
const app=express()

app.get("/",(req,res)=>{
     console.log(req.url)
    res.send("hello welcome")

})
app.get("/home",(req,res)=>{
     console.log(req.url)
    res.send("hello welcome to home")
})

app.get("/home/page1",(req,res)=>{
     console.log(req.url)
     console.log(req.method)
     console.log(req.body)
     console.log(req.header.authorization)
    res.send("hello response from page1")
})
app.listen(8080,()=>{
    console.log("server listening")
})
