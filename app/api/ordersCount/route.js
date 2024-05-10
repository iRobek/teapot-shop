export async function GET(req,res) {

    const { MongoClient} = require ('mongodb');
    const url = process.env.MONGO_CONN;
    const client = new MongoClient(url);

    const dbName = process.env.MONGO_DB; // database name
    await client.connect();

    console.log('Connection OK');

    const db = client.db(dbName);
    const colleciton = db.collection('products');


    //fetch results
    const orderCount = await colleciton.countDocuments();
    console.log('Numbe of orders: ' + orderCount);

    return Response.json(orderCount);

}