const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri, { useUnifiedTopology: true });

(async () => {
    await client.connect();
    const db = client.db("Global-Warming_2")
    const collection = db.collection("temp_info")
    console.log(`Successfully connected to ${db.databaseName} database`);

    let document = await collection.find({})
    while (await document.hasNext()){
        let nextD = await document.next();
        console.log(nextD);
    }

    client.close()
})();
