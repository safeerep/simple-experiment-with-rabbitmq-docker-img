import express, { Express, Request, Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectQueue from './rabbitmq/rabbitmq'
import productRouter from './routes/productRouter'
import dbConnect from './config/db'
dbConnect()

const app: Express = express()
app.use(express.json())
connectQueue()

app.use('/', productRouter)

const PORT: number | string = process.env.PORT || 3003
app.listen(PORT, () => {
    console.log(`product service is running on the port ${PORT}`);
})

