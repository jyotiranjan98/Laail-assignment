import express from "express"
import cors from "cors"


const app =express()
app.use(express.json());
app.use(cors());

const Contracts = require("../model/contract")

app.post("/contracts")