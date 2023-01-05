import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: number = 8080

app.get('/', (req: Request, res: Response) => {
    res.send('Bienvenido, Ahu ahu')
})

app.get('/shu', (req: Request, res: Response) => {
    res.send('Ana Shu Shu')
})

app.listen(port, () => {
    console.log(`Puerto ${port}`);
})