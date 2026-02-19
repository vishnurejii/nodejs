import express from "express"
const app=express()

app.listen(8080)

const user=[{id:1,name:"john",email:"john@gmail.com",role:"student"},
    {id:2,name:"Cathy",email:"cathy@gmail.com",role:"student"},
    {id:3,name:"admin",email:"admin@gmail.com",role:"admin"}

]

app.get("/",(req,res)=>{
     res.json(user)
    }
)

app.get("/1",(req,res)=>{
    res.send(user[0])
})

   
   

