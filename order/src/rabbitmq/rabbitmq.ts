import amqp, {Channel, Connection, connect} from 'amqplib'
import { createOrder} from '../controller/orderController'

var channel: Channel, connection: Connection;
const connectFunction = async () => {
    try {
        connection = await amqp.connect("amqp://localhost:5672");
        channel    = await connection.createChannel()
        
        await channel.assertQueue("test-queue")
        
        channel.consume("test-queue", (data: any) => {
            console.log(`${Buffer.from(data.content)}`);
            const content = Buffer.from(data.content).toString();
            createOrder(content)
            channel.ack(data);
        })
    } catch (error) {
        console.log(error);
    }
}

export default connectFunction;

