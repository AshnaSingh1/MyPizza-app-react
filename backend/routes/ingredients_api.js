const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//Database Name
const dbName = 'pizzeria';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('ingredients');
    return collection
}

async function getIngredients(){
    try{
        let collection=await main();
        const findResult = await collection.find({}).toArray();
        return findResult;
    } finally{
        client.close()
    }
}

module.exports={
    getIngredients
}