import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const users = [];
const SECRET = "lpu";

//middleware
const auth = (req, res, next) => {
    const bearerHeader = req.headers.authorization;

    if (!bearerHeader) {
        return res.send("No token provided");
    }

    const token = bearerHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.send("Invalid token");
    }
};


// signup
app.post("/signup", async (req, res) => {
    const body = req.body;

    const hashPassword = await bcrypt.hash(body.password, 10);
    body.password = hashPassword;

    users.push(body);

    res.json({ message: "User created" });
});


// login
app.post("/login", async (req, res) => {
    const body = req.body;

    const user = users.find(u => u.email === body.email);
    if (!user) {
        return res.send("User not found");
    }

    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
        return res.send("Wrong password");
    }

    // Generate token
    const token = jwt.sign({ email: user.email }, SECRET);

    res.json({ token: token });
});


app.get("/", auth, (req, res) => {
    res.send("Hello World");
});


app.listen(8080);