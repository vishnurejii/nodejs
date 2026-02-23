import express from "express";
const app = express();
app.use(express.json());

const auth = (req, res, next) => {
    
    const token=req.body

    const tokenValue = token.split(" ")

    if(tokenValue[1] === "john@gmail.com" && tokenValue[0]==="1234"){
         next()
    }
   else {
        return res.send("stopped")
    }


}

app.get("/email/:email/pass/:pass", auth,(req, res) => {
    res.send("Welcome");
});

app.post("/login", (req, res) => {
    res.send(token)
})


app.listen(8080, () => {
  console.log("server is live");
});



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