const MarkerAPIController = require("../src/Controllers/MarkerAPIController");

function routes(app){
    app.get('/markers', MarkerAPIController.getAllStartMarkersController);
    app.get('/markers/:id', MarkerAPIController.getDogWalkInfoController);
}

module.exports = routes;
