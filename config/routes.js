const MarkerAPIController = require("../src/Controllers/MarkerAPIController");

function routes(app){
    app.get('/markers', MarkerAPIController.getAllStartMarkers);
}

module.exports = routes;
