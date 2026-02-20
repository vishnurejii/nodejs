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

// import express from "express"
// const app = express()

// app.use(express.json())
// const auth=(req, res, next)=>{

//     const token=req.body.token   
//     if (token===1234) {
//         next()  
//     } else {
//         return res.send("stopped")
//     }
// }

// app.post("/token", auth,(req, res)=>{
//     res.send("Welcome User")
// })

// app.listen(8080)


import express from "express"
const app = express()

app.use(express.json())
const auth=(req, res, next)=>{

    const BearerToken=req.headers.authorization

    const token=BearerToken.slice(7)

    if(token==="1234"){
        next()  
    }
    else{
        return res.send("stopped")
    }
}

app.post("/", auth,(req, res)=>{
    res.send("Welcome User")
})

app.listen(8080)




// import express from "express"
// const app = express()

// app.use(express.json())
// const auth=(req, res, next)=>{

//     const BearerToken=req.headers.authorization

//     const token=BearerToken.split(" ")

//     if(token[1]==="1234"){
//         next()  
//     }
//     else{
//         return res.send("stopped")
//     }
// }

// app.post("/", auth,(req, res)=>{
//     res.send("Welcome User")
// })

// app.listen(8080)






//    const authHeader = req.headers.authorization

//     // 1️⃣ Check if header exists
//     if (!authHeader) {
//         return res.status(401).send("Authorization header missing")
//     }

//     // 2️⃣ Split "Bearer 1234"
//     const parts = authHeader.split(" ")

//     // 3️⃣ Validate format and token
//     if (parts.length !== 2 || parts[0] !== "Bearer") {
//         return res.status(401).send("Invalid authorization format")
//     }

//     const token = parts[1]

//     if (token === "1234") {
//         next()
//     } else {
//         return res.status(401).send("Unauthorized")
//     }

