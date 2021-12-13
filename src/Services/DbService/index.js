const MongoClient = require('mongodb').MongoClient;
const mongoConnection = 'mongodb://root:password@localhost:27017';

async function connectToDb() {
    const connection = await MongoClient.connect(mongoConnection);
    const db = connection.db('canineCompass');
    const collection = db.collection('dogWalks');
    return collection;
}

async function getAllStartMarkers(collection) {
    const data = await collection.find({}).toArray();
    let markers = [];
    data.forEach(function (walk) {
        markers.push({"name" : walk.name,
                        "markersArray" : walk.markersArray[0]});
    })
    return markers;
}

module.exports.connectToDb = connectToDb;
module.exports.getAllStartMarkers = getAllStartMarkers;
