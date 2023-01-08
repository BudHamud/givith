import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "../utils/logger";
import goodbyeRouter from "./GoodbyeRouter";

let server = express()

let rootRouter = express.Router()

rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET 8080/api')
    const obj = {
        data: { messsage: 'Goodbye World' }
    }
    res.json(obj)
})

server.use('/', rootRouter)
server.use('/hello', helloRouter)
server.use('/goodbye', goodbyeRouter)

export default server