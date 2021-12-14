const DbService = require("../../Services/DbService");

async function getAllStartMarkersController(request, response) {
    const collection = await DbService.connectToDb();
    const markers = await DbService.getAllStartMarkers(collection);
    response.json(markers);
}

async function getStartMarkerByIDController(request, response) {
    const collection = await DbService.connectToDb();
    const marker = await DbService.getStartMarkerByID(collection, request.params.id);
    response.json(marker);
}

module.exports.getAllStartMarkersController = getAllStartMarkersController
module.exports.getStartMarkerByIDController = getStartMarkerByIDController