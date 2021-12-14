const MarkerAPIController = require("../src/Controllers/MarkerAPIController");
const AddNewRouteController = require("../src/Controllers/AddNewRouteController");

function routes(app){
    app.get('/markers', MarkerAPIController.getAllStartMarkersController);
    app.post('/', AddNewRouteController.addNewRouteController)
}

module.exports = routes;
