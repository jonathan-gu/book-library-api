import { Request, Response } from "express"
import db from "../config/db"
import { validationResult } from "express-validator"

export const createBook = async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const book = await db.book.create({
            data: {
                title: req.body.title,
                author: req.body.author,
                publicationDate: req.body.publicationDate,
                kind: req.body.kind
            }
        })
        return res.status(201).json({ book })
    } catch (e) {
        return res.status(400).json({ error : e?.toString()})
    }
}