const DbService = require("../../Services/DbService");
const express = require("express");

async function getAllStartMarkersController(request, response) {
    const collection = await DbService.connectToDb();
    const markers = await DbService.getAllStartMarkers(collection);
    if (markers.length !== 0) {
        response.json({
            success: true,
            message: 'Successfully found markers',
            data: markers
        });
    } else {
        response.json({
            success: false,
            message: 'No markers returned :(',
            data: markers
        });
    }
}

async function getDogWalkInfoController(request, response) {
    const collection = await DbService.connectToDb();
    const dogWalkInfo = await DbService.getDogWalkInfo(collection, request.params.id);
    if (JSON.stringify(dogWalkInfo) !== '{}') {
        response.json({
            success: true,
            message: 'Successfully found dog walk info',
            data: dogWalkInfo
        });
    } else {
        response.json({
            success: false,
            message: 'No dog walk info found :(',
            data: dogWalkInfo
        });
    }
}


async function addAdditionalRouteMarkersController(request, response) {
    const collection = await DbService.connectToDb();
    let data = await DbService.addAdditionalRouteMarkers(collection, request.params.id, request.body);
    response.json(data)
}

module.exports.getAllStartMarkersController = getAllStartMarkersController;
module.exports.getDogWalkInfoController = getDogWalkInfoController;
module.exports.addAdditionalRouteMarkersController = addAdditionalRouteMarkersController;


