import { MongoClient } from "mongodb"

export async function getProducts() {

    const { MongoClient} = require ('mongodb');
    const url = process.env.MONGO_CONN;
    const client = new MongoClient(url);

    const dbName = process.env.MONGO_DB; // database name
    await client.connect();

    console.log('Connection OK');

    const db = client.db(dbName);
    const colleciton = db.collection('products');


    //fetch results
    const products = await colleciton.find({}).toArray();
    return products;

}