const DbService = require("../../Services/DbService");
const express = require("express");

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

async function editWalkMarkersController(request, response){
    const collection = await DbService.connectToDb();
    const dogWalkInfo = await DbService.editWalkMarkers(collection, request.params.id, request.body);
    response.json(dogWalkInfo);
}


module.exports.getAllStartMarkersController = getAllStartMarkersController
module.exports.getDogWalkInfoController = getDogWalkInfoController
module.exports.editWalkMarkersController = editWalkMarkersController
