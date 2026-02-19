import express from "express"
const app=express()

// app.get("/:id",(req,res)=>{
//     console.log(req.url)
//     console.log(req.params)
//     res.send(req.params.id)
    
// })

app.get("/:id/:email",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.id+req.params.email)
    
})

app.get("/id/:id/email/:email",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.id+req.params.email)
    
})

app.get("/home",(req,res)=>{
 
    res.send("hello world")
    
})

app.listen(8080,()=>{
    console.log("server listening")
})
