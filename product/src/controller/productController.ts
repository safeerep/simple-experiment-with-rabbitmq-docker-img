import { Request, Response } from 'express'
import { sendDataThroughRMQ} from '../rabbitmq/rabbitmq'
import { productsCollection, Product} from '../models/productModel'


export const addProduct = async ( req: Request, res: Response) :Promise <void>=> {
    try {
        console.log('ok safeerrr'); 
        const { Name, Description, Price}: Product = req.body;
        const newProduct: Product = await productsCollection.create({
            Name, Description, Price
        })
        if (newProduct) {
            res.json({success: true, message: 'successfully added a new product to the product collection'})
        } else {
            throw new Error('something went wrong')
        }
    } catch (error: any) {
        if (error.code === 11000) res.json({success: false, message: 'a product already existing with the name provided'})
        else res.json({success: false, message: error})
    }
}

export const createOrder = async (req: Request, res: Response) => {
    // sending a single product from db 
    const data = await productsCollection.findOne()
    sendDataThroughRMQ(data);  
    console.log("A message is sent to queue")
    res.send("Message Sent"); 
}