const DbService = require("../../Services/DbService");

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

module.exports.getAllStartMarkersController = getAllStartMarkersController;
module.exports.getDogWalkInfoController = getDogWalkInfoController;
