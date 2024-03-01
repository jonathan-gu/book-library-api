import express, { Express } from "express"

const port = 8080

const app: Express = express()

app.use(express.json())

app.listen(port)