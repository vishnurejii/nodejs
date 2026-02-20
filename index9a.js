// import express from "express"

// const app = express()

// const auth = (req, res, next) => {
//     if (req.url === "/1234") {
//         next()  
//     } else {
//         res.send("Stopped")
//     }
// }

// app.use(auth)

// app.get("/1234", (req, res) => {
//     res.send("Welcome")
// })

// app.listen(8080)

import express from "express"
const app = express()

app.use(express.json())
const auth=(req, res, next)=>{

    const token=req.body.token   
    if(token===1234){
        next()  
    }
    else{
        return res.send("stopped")
    }
}

app.post("/",auth,(req, res)=>{
    res.send("Welcome User")
})

app.listen(8080)