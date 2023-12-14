import express, { Request, Response} from 'express'
import { addProduct, createOrder} from '../controller/productController'
const router = express.Router()


router.get('/' , (req: Request, res: Response) => {
    res.send('product service is simply working with ts')
})

router.post('/add-product', addProduct)

// using rabbitmq using get ahead of post
router.get("/create-order", createOrder)


export default router;