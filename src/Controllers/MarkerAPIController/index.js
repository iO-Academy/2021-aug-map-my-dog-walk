const DbService = require("../../Services/DbService");
const {addAdditionalRouteMarkers} = require("../../Services/DbService");

async function getAllStartMarkersController(request, response) {
    const collection = await DbService.connectToDb();
    const markers = await DbService.getAllStartMarkers(collection);
    response.json(markers);
}

async function getDogWalkInfoController(request, response) {
    const collection = await DbService.connectToDb();
    const dogWalkInfo = await DbService.getDogWalkInfo(collection, request.params.id);
    response.json(dogWalkInfo);
}

async function addAdditionalRouteMarkersController(request, response) {
    const collection = await DbService.connectToDb();
    await DbService.addAdditionalRouteMarkers(collection, id, request.params.markersArray);
}

module.exports.getAllStartMarkersController = getAllStartMarkersController;
module.exports.getDogWalkInfoController = getDogWalkInfoController;
module.exports.addAdditionalRouteMarkersController = addAdditionalRouteMarkersController;
