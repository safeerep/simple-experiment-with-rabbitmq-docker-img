import { ordersCollection, Order } from "../models/orderModel";
import mongoose from "mongoose";

// this function will call on when product are coming through the rabbit mq to create order
export const createOrder = async (data: any): Promise<void> => {
  try {
    const obj = JSON.parse(data);
    // only one product is coming 
    const Products = [{
        ProductId: new mongoose.Types.ObjectId(obj._id),
        Quantity: 1
    }]

    const TotalPrice = obj.Price;    
    const UserId = new mongoose.Types.ObjectId("657870f84299539883bd3d8a")
    const newOrder: Order = await ordersCollection.create({
        UserId, Products, TotalPrice
    })
    if (newOrder) {
      return;
    } else throw new Error("something went wrong during creating new order");
  } catch (error: any) {
    console.log(`An error happened during creating order ${error}`);
    return;
  }
};
