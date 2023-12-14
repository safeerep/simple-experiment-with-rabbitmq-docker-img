import { Document, Schema, model } from "mongoose";

interface Product extends Document {
  Name: string;
  Description: string;
  Price: number;
  Status?: boolean;
}

const productSchema = new Schema<Product>({
  Name: {
    type: String,
    required: true,
    unique: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
  },
  Status: {
    type: Boolean,
    default: true,
  },
});

const productsCollection = model<Product>("products", productSchema);
export { productsCollection, Product };
