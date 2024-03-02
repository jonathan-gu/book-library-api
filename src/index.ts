import express, { Express } from "express"
import bookRoute from "./routes/bookRoute"

const port = 8080

const app: Express = express()

app.use(express.json())

app.use("/books", [
    bookRoute
])

app.listen(port)