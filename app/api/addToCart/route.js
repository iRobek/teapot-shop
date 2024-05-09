export async function GET(req, res) {
 
    //get the parameter passed through the URL
    const { searchParams } = new URL(req.url)
    const prodName = searchParams.get('prodName')
  
    console.log(prodName);
  
   // =================================================
    const { MongoClient } = require('mongodb');
  
    const url = process.env.MONGO_CONN;
    const client = new MongoClient(url);   
   
    const dbName = process.env.MONGO_DB; // database name
  
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('shopping_cart'); // collection name
  
    console.log('------------------------> tyring to add prod to cart')
  
    var myobj = { product_name: prodName, username: "sample@test.com"};
    const insertResult = await collection.insertOne(myobj); //insert data to collection
  
   
  
    // at the end of the process we need to send something back.
    return Response.json({ "data":"" + "inserted" + ""})
  }
  