import { MongoClient } from "mongodb";
                                  
const url = "mongodb+srv://marilirulita:DvNdpBvHZOiVbyNf@promptopia.bp93xi6.mongodb.net/?retryWrites=true&w=majority&appName=promptopia";

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);