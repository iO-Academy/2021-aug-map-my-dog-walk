const MongoClient = require('mongodb').MongoClient;
const mongoConnection = 'mongodb://root:password@localhost:27017';
const ObjectId = require('mongodb').ObjectId;

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
            "markersObject" : {"lat": parseFloat(walk.markersArray[0].lat), "lng": parseFloat(walk.markersArray[0].lng)},
            "id": ObjectId(walk._id)
        });
    })
    return markers;
}

async function getStartMarkerByID(collection, id) {
    const o_id = ObjectId(id)
    const data = await collection.findOne({'_id': o_id})
    return data.markersArray[0]
}

module.exports.connectToDb = connectToDb;
module.exports.getAllStartMarkers = getAllStartMarkers;
module.exports.getStartMarkerByID = getStartMarkerByID;
