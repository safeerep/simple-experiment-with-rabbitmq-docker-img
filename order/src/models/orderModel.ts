import mongoose, { Document, Schema, model, Types } from "mongoose";

interface Product {
  ProductId: Types.ObjectId;
  Quantity: number;
}

interface Order extends Document {
  UserId: Types.ObjectId;
  Products: Product[];
  TotalPrice: number; 
}

const orderSchema = new Schema<Order>({
  UserId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  Products: [
    {
      ProductId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      Quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  TotalPrice: {
    type: Number,
    required: true
  }
});

const ordersCollection = model<Order>("orders", orderSchema);
export { ordersCollection, Order };
