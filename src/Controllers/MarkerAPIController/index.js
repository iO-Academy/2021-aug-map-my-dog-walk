const DbService = require("../../Services/DbService");

async function getAllStartMarkers(request, response) {
    const collection = await DbService.connectToDb();
    const markers = await DbService.getAllStartMarkers(collection);
    response.json(markers);
}

module.exports.getAllStartMarkers = getAllStartMarkers