import express, { Express, Request, Response} from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes'
dotenv.config()
import dbConnect from './config/db'
dbConnect()


const app: Express = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use('/', userRouter)

const PORT: number | string = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`auth service is running on the port ${PORT}`);
})



