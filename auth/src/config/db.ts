import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL || '';
export default () => {
    mongoose.connect(MONGO_URL) 
    .then(() => {
        console.log(`successfully connected mongo db with auth service`);
    })
    .catch((err) => {
        console.log(`an error happened during connecting with db in auth service`); 
    })
}

