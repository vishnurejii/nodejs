import express from "express"
const app = express()

app.get("/:a/:b", (req, res) => {
    console.log(req.url)
    console.log(req.params)

    let a = Number(req.params.a)
    let b = Number(req.params.b)
  

    let sum = a + b 

    res.send(sum)
})

app.get("/x/:a/y/:b/z/:c", (req, res) => {
    console.log(req.url)
    console.log(req.params)

    let a = Number(req.params.a)
    let b = Number(req.params.b)
     let c = Number(req.params.c)

    let sum = a + b + c

    res.send(sum)
})

app.get("/:x/:a/:y/:b/:z/:c", (req, res) => {
    console.log(req.url)
    console.log(req.params)

    let a = Number(req.params.a)
    let b = Number(req.params.b)
     let c = Number(req.params.c)

    let sum = a + b + c

    res.send(sum)
})

app.get("/:a/:b/:c/:d", (req, res) => {
    res.send("hello students")
})

app.listen(8080, () => {
    console.log("server listening")
})
