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

module.exports.getAllStartMarkersController = getAllStartMarkersController
