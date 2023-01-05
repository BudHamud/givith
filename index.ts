import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: number = 8080

app.get('/', (req: Request, res: Response) => {
    const obj = {
        data: { messsage: 'Goodbye World' }
    }
    res.json(obj)
})

app.get('/:msg', (req: Request, res: Response) => {
    const path = req.params['msg']
    const obj = {
        data: { messsage: `Hello, ${path}` }
    }
    res.json(obj)
})

app.listen(port, () => {
    console.log(`Puerto ${port}`);
})