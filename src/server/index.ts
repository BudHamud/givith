import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
// Security
import cors from 'cors'
import helmet from 'helmet'
// -- //
import routes from '../routes'
import swaggerUI from 'swagger-ui-express'

const server: Express = express()

server.use('/docs', swaggerUI.serve, swaggerUI.setup(undefined, {
    swaggerOptions: {
        url: '/swagger.json',
        explorer: true
    }
}))

server.use('/api', routes)

server.use(express.static('public'))

server.use(helmet())
server.use(cors())

// Content type config
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))

server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
})

export default server