import express from "express"
const app=express()

app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("hellooooooo response from server for /")
})
app.listen(8080,()=>{
    console.log("server listening")
})
