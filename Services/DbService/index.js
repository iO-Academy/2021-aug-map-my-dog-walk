const MongoClient = require('mongodb').MongoClient;
const mongoConnection = 'mongodb://root:password@localhost:27017';

async function connectToDb() {
    const connection = await MongoClient.connect(mongoConnection);
    const db = connection.db('canineCompass');
    const collection = db.collection('dogWalks');
    return collection;
}

module.exports.connectToDb = connectToDb();

