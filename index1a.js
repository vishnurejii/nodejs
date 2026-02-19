import express from "express"
const app=express()

app.get("/",(req,res)=>{
   res.send("helloooo")
})
app.listen(8081)
