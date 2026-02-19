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

app.get("/:id",(req,res)=>{
   const id=Number(req.params.id)

   const found=user.find(u=>u.id===id)

   if(!found){
    req.send("id not find")
   }else{
    res.send(user[id-1])

   }
})

   
   

