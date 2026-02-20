import express from "express"
const app=express()

app.listen(8080)

const logger=(req,res,next)=>{
    
    req.message="this is logger function"
    // console.log(req.url)
    next()
    
}
// app.use(logger)

app.get("/",logger,(req,res)=>{
    // res.end()
    // res.send("hello world")
    // res.send({name:"john",age:21})
    //  console.log(req.url)
    console.log(req.message)
    res.json(req.url)

})

app.get("/home",(req,res)=>{
    console.log(req.message)
    res.send("its home")
})