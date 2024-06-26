import { auth } from "@/app/auth";

export async function GET(req,res) {

    const session = await auth();
    

    const { MongoClient} = require ('mongodb');
    const url = process.env.MONGO_CONN;
    const client = new MongoClient(url);

    const dbName = process.env.MONGO_DB; // database name
    await client.connect();

    const db = client.db(dbName);
    const colleciton = db.collection('shopping_cart');


    //fetch results
    const products = await colleciton.find({username: session.user.username}).toArray();
    return Response.json(products);

}