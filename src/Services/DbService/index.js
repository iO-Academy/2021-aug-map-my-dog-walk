const MongoClient = require('mongodb').MongoClient;
const mongoConnection = 'mongodb://root:password@localhost:27017';
const ObjectId = require('mongodb').ObjectId;

async function connectToDb() {
    const connection = await MongoClient.connect(mongoConnection);
    const db = connection.db('canineCompass');
    return db.collection('dogWalks');
}

async function getAllStartMarkers(collection) {
    const data = await collection.find({}).toArray();
    let markers = [];
    data.forEach(function (walk) {
        markers.push({"name" : walk.name,
            "markersObject" : {"lat": walk.markersArray[0].lat, "lng": walk.markersArray[0].lng},
            "id": ObjectId(walk._id)
        });
    })
    return markers;
}

async function addNewRoute(collection, newData) {
    return collection.insertOne(newData);
}

module.exports.connectToDb = connectToDb;
module.exports.getAllStartMarkers = getAllStartMarkers;
module.exports.addNewRoute = addNewRoute;
