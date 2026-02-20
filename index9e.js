import express from "express"
const app = express()

app.use(express.json())
const auth=(req, res, next)=>{

    const jwt="Math.floor(Math.random()*1001)+1000"

    const stringJwt=String(jwt)

    const BearerToken=req.headers.authorization

    const value=BearerToken.split(" ")

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