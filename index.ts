import dotenv from 'dotenv'
import server from './src/server'
import { LogSuccess, LogError } from './src/utils/logger'

dotenv.config()

const PORT = 8080 // process.env.PORT

server.listen(PORT, () => {
    LogSuccess(`Puerto ${PORT}`)
})

server.on('error', (error) => {
    LogError(`Error en puerto ${PORT}`)
})