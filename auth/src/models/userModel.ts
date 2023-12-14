import { Document, Schema, model } from "mongoose";


interface User extends Document {
  Email: string;
  Password: string;
  Status?: boolean;
  Phone?: number;
}

const userSchema = new Schema<User>({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
    minlength: 6,
  },
  Status: {
    type: Boolean,
    default: true,
  },
  Phone: {
    type: Number,
  }
});

const usersCollection = model <User> ('users', userSchema)
export { usersCollection, User}
