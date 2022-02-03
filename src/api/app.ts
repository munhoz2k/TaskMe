import express from 'express'
import path from "path"
import "dotenv/config"

const app = express()

app.use(
    express.json(),
    express.urlencoded({ extended: true })
)


app.use('/uploads', express.static(path.join(__dirname, '..', '..', 'tmp', 'uploads')))

export { app }