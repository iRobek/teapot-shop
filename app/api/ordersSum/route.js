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
    const orderSum = await colleciton.aggregate([{$group:{_id:null, totalSale: {$sum: {$toDouble: "$product_price"}}}}]).toArray();
    console.log(orderSum)
    return Response.json(orderSum);

}