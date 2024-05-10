
export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the api page")
  
  //get the values entered in the regaister page
    // get the values
    // that were sent across to us.
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')
    const pass = searchParams.get('pass')
    const role = searchParams.get('role')
    
   // =================================================
    const { MongoClient } = require('mongodb');
  //your URL to atlas goes here 
    const url = process.env.MONGO_CONN;
    const client = new MongoClient(url);
    
   //connect to the database and the collection 
     const dbName = process.env.MONGO_DB; // database name
     await client.connect();
 
     console.log('Connected successfully to server');
     const db = client.db(dbName);
     const collection = db.collection('login'); // collection name
   
   
     const findResult = await collection.insertOne({"username": email, "pass": pass, "role": role});
     console.log('Found documents =>', findResult);
     let valid=true;
     
     return Response.json({ "data":"" + valid + ""});

  }
  
  