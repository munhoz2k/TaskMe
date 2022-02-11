export default class AppError extends Error {

    public status: number

    constructor(message: string, status: number) {
        super()
        this.status = status
        this.message = message
    }

}