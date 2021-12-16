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
        markers.push({"walkName" : walk.name,
            "markersObject" : walk.markersArray[0],
            "id": ObjectId(walk._id),
            "difficulty": walk.difficulty
        });
    })
    return markers;
}

async function getFilteredMarkers(collection, difficulty, time) {
    let findTime = [];
    if (time !== undefined) {
        if (parseInt(time) === 0) {
            findTime = [{length: {$gt: 0}}, {length: {$lt: 20}}]
        } else if (parseInt(time) === 20) {
            findTime = [{length: {$gt: 20}}, {length: {$lt: 40}}]
        } else if (parseInt(time) === 40) {
            findTime = [{length: {$gt: 40}}]
        }
    }

    if(difficulty !== undefined && time !== undefined){
        let data = await collection.find({'difficulty': parseInt(difficulty), $and:findTime}).toArray();
        return getFilteredMarkers2(data);
    } else if (difficulty !== undefined && time === undefined) {
        let data = await collection.find({'difficulty': parseInt(difficulty)}).toArray();
        return getFilteredMarkers2(data);
    } else if (time !== undefined && difficulty === undefined) {
        let data = await collection.find({$and:findTime}).toArray();
        return getFilteredMarkers2(data);
    } else {
        let data = await collection.find({}).toArray();
        return getFilteredMarkers2(data);
    }
}

async function getFilteredMarkers2(data) {
    let filteredMarkers = [];
    data.forEach(function (walk) {
        filteredMarkers.push({"walkName" : walk.name,
            "markersObject" : walk.markersArray[0],
            "id": ObjectId(walk._id),
            "difficulty": walk.difficulty
        });
    })
    console.log(filteredMarkers);
    return filteredMarkers;
}

async function getDogWalkInfo(collection, id) {
    const o_id = ObjectId(id);
    return await collection.findOne({'_id': o_id});
}


async function addAdditionalRouteMarkers(collection, id, newMarkersArray) {
    const o_id = ObjectId(id);
    return await collection.updateOne({'_id': o_id}, {$push: {'markersArray': {$each: newMarkersArray}}});
}

async function addNewWalk(collection, newData) {
    return collection.insertOne(newData);
}

module.exports.connectToDb = connectToDb;
module.exports.getAllStartMarkers = getAllStartMarkers;
module.exports.getDogWalkInfo = getDogWalkInfo;
module.exports.addAdditionalRouteMarkers = addAdditionalRouteMarkers;
module.exports.addNewWalk = addNewWalk;
module.exports.getFilteredMarkers = getFilteredMarkers;
