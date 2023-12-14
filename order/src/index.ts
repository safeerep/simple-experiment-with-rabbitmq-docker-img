import express, { Express, Request, Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectFunction from './rabbitmq/rabbitmq'
import orderRouter from './routes/orderRouter'
import dbConnect from './config/db'
dbConnect()

const app: Express = express()

app.use(express.json())
connectFunction()

app.use('/', orderRouter)

const PORT: number | string = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`order service is running on the port ${PORT}`);
})



