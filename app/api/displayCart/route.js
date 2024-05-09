export async function GET(req,res) {

    const { MongoClient} = require ('mongodb');
    const url = process.env.MONGO_CONN;
    const client = new MongoClient(url);

    const dbName = process.env.MONGO_DB; // database name
    await client.connect();

    const db = client.db(dbName);
    const colleciton = db.collection('shopping_cart');


    //fetch results
    const products = await colleciton.find({}).toArray();
    return Response.json(products);

}