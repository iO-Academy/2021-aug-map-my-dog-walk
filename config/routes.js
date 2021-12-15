
const MarkerAPIController = require("../src/Controllers/MarkerAPIController");
const AddNewRouteController = require("../src/Controllers/AddNewWalkController");
const ErrorController = require("../src/Controllers/ErrorController")

function routes(app){
    app.get('/markers', MarkerAPIController.getAllStartMarkersController);
    app.post('/markers', AddNewRouteController.addNewWalkController);
    app.put('/markers', ErrorController)
    app.delete('/markers', ErrorController)

}

module.exports = routes;
