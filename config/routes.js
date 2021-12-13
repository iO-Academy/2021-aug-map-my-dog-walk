const MarkerAPIController = require("../src/Controllers/MarkerAPIController");

function routes(app){
    app.get('/markers', MarkerAPIController.getAllStartMarkersController);
}

module.exports = routes;
