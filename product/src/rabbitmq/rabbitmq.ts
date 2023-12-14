import amqp, {Channel, connect, Connection} from 'amqplib'

var channel: Channel, connection:Connection;  
const connectQueue = async () => {
    try {
        connection = await amqp.connect("amqp://localhost:5672");
        channel    = await connection.createChannel()
        
        await channel.assertQueue("test-queue")
        
    } catch (error) {
        console.log(error)
    }
}


export default connectQueue;
export const sendDataThroughRMQ = async (data: any) => {
    // send data to queue
    await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));
    // close the channel and connection
    await channel.close();
    await connection.close();
}




// async function sendData (data: any) {
//     // send data to queue
//     await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));
        
//     // close the channel and connection
//     await channel.close();
//     await connection.close(); 
// }