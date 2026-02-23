import express from "express"
const app = express()

app.use(express.json())

let jwt=Math.floor(Math.random()*1001)+1000
 let stringJwt=String(jwt)

const auth=(req, res, next)=>{

    const BearerToken=req.headers.authorization

    let value=BearerToken.split(" ")

    if(value[1]===stringJwt){
        next()  
    }
    else{
        return res.send("stopped")
    }
}

app.post("/login",(req, res)=>{
    res.send(stringJwt)
})

app.post("/", auth,(req, res)=>{
    res.send("Welcome User")
})

app.listen(8080)