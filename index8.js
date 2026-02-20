import express from "express"
const app = express()

const greet=(req, res, next)=>{
    console.log("hello world")
    next()
}
app.use(greet)

app.use(express.json())//middleware//app.use will execute the middleware

const users = [
    { id: 1, name: "john", email: "john@gmail.com", role: "student" },
    { id: 2, name: "Cathy", email: "cathy@gmail.com", role: "student" },
    { id: 3, name: "admin", email: "admin@gmail.com", role: "admin" }
]

// Get all users
app.get("/", (req, res) => {
    res.json(users)
})

// Get user by id
app.get("/:id", (req, res) => {
    const id = Number(req.params.id)

    const found = users.find(u => u.id === id)

    if (!found) {
        return res.status(404).json({ message: "ID not found" })
    }

    res.json(found)
})

// Add new user (POST)
app.post("/", (req, res) => {
    const newUser = req.body

    users.push(newUser)

    res.status(201).json({
        message: "User added successfully",
        data: newUser
    })
})


app.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    const filteredUsers = users.filter(u => u.id !== id)

    if (filteredUsers.length === users.length) {
        return res.status(404).json({ message: "User not found" })
    }

    // Clear original array
    users.length = 0

    // Push filtered data back
    users.push(...filteredUsers)

    res.json({ message: "User deleted successfully" })
})

app.listen(8080, () => {
    console.log("Server running on 8080")
})
