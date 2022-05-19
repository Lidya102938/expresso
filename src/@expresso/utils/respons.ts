import { Response } from "express"

export const successResponse = (res: Response, statusCode: number, data: any) => {
    res.status(statusCode).json(data)
}