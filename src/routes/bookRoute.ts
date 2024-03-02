import { Router } from "express"
import { createBook } from "../controllers/bookController"
import { body } from "express-validator"

const app = Router()

app.post("", [
    body("title").exists().isString().notEmpty(),
    body("author").exists().isString().notEmpty(),
    body("publicationDate").exists(),
    body("kind").exists().isString().notEmpty()
], createBook)

export default app