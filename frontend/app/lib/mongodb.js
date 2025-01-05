import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);



let clientPromise;

if (process.env.NODE_ENV === "development") {
   
    clientPromise = global._mongoClientPromise || (global._mongoClientPromise = client.connect());
} else {
   
    clientPromise = client.connect();
}

export default clientPromise;
