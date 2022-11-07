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
    const collection = db.collection('cart_ingredients');
    return collection
}

async function getItems(){
    // console.log("getItems is called.........")
    try{
        let collection=await main();
        const findResult = await collection.find({}).toArray();
        return findResult;
    } finally{
        client.close()
    }
}
async function addItem(data){
    console.log("addItem API")
    try{
        let collection=await main();
        const insertResult = await collection.insertOne(data);
        return insertResult;
    } finally{
        client.close()
    }
}
async function deleteItem(id){
    console.log("deleteItem API call....")
    console.log(id)
    try{
        let collection=await main();
        const deleteResult = await collection.deleteOne({id:id.id});
        return deleteResult;
    } finally{
        client.close()
    }
}

module.exports={
    getItems,
    addItem,
    deleteItem
}