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

app.get("/home", (req, res) => {
    res.send("hello world")
})

app.listen(8080, () => {
    console.log("server listening")
})
