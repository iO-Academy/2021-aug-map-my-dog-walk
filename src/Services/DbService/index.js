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
            "markersObject" : walk.markersArray[0],
            "id": ObjectId(walk._id)
        });
    })
    return markers;
}

async function getDogWalkInfo(collection, id) {
    const o_id = ObjectId(id);
    return await collection.findOne({'_id': o_id});
}

async function addAdditionalRouteMarkers( collection, id, markersArray) {
    const o_id = ObjectId(id);
    await collection.updateOne({'_id': o_id}, {'markersArray': markersArray});
}

module.exports.connectToDb = connectToDb;
module.exports.getAllStartMarkers = getAllStartMarkers;
module.exports.getDogWalkInfo = getDogWalkInfo;
module.exports.addAdditionalRouteMarkers = addAdditionalRouteMarkers;
