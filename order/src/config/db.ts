import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL || '';
export default () => {
    mongoose.connect(MONGO_URL)
    .then(() => {
        console.log(`successfully connected mongo with order service`);
    })
    .catch((error) => {
        console.log(`an error happened during connecting with mongo in order service`);   
    })
}

