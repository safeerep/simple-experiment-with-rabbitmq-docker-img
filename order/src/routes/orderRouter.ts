import express, { Request, Response} from 'express'
import { createOrder} from '../controller/orderController'
const router = express.Router()


router.get('/' , (req: Request, res: Response) => {
    res.send('order service is simply working with ts')
})

router.get('/create-order', (req: Request, res: Response) => {
    res.send('its get for create order')
})



export default router;