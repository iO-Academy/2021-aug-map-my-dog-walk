const MarkerAPIController = require("../src/Controllers/MarkerAPIController");

function routes(app){
    app.get('/markers', MarkerAPIController.getAllStartMarkersController);
    app.get('/markers/:id', MarkerAPIController.getDogWalkInfoController);
    app.put('/markers/:id', MarkerAPIController.editWalkMarkersController);
}

module.exports = routes;
