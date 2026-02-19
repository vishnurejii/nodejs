import express from "express"
const app=express()

app.listen(8080)


//params
// app.get("/:name",(req,res)=>{
//     res.send("hello "+req.params.name)

// })

//query
// app.get("/",(req,res)=>{
//     res.send("hello "+req.query.name)

// })

// app.get("/",(req,res)=>{
//     res.send("hello "+req.query.name+req.query.age)

// })


app.get("/",(req,res)=>{
    const name=req.query.name
    const age=req.query.age
    res.send(`hello ${name} ,you are ${age} years old`)

})