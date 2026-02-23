import express from "express"
import jwt from "jsonwebtoken"

const app = express()

const SECRET = "lpu"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDMzMSwiZXhwIjoxNzcxODM3OTMxfQ.wE0PnkogYF-dmvI2rXc2XUwpD2TDKwMBA0JlNlXDaeI"

const user = jwt.verify(token, SECRET)

console.log(user)