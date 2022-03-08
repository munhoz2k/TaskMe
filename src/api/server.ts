import { NextFunction, Request, Response } from "express"
import AppError from "./errors/AppError"
import { app } from "./app"
import { router } from "./routes"
import cors from "cors"

const PORT = 3000

app.use(cors())
app.use(router)

app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
    if (!error.status) {
        console.log(error)

        error.status = 500
        error.message = "Erro interno no servidor"

        res.status(error.status).json(error.message)
    } else {
        res.status(error.status).json(error.message)
    }
})

app.listen(PORT, () => console.log(`Server Up on: http://localhost:${PORT}/`))
