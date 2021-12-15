
const MarkerAPIController = require("../src/Controllers/MarkerAPIController");
const AddNewWalkController = require("../src/Controllers/AddNewWalkController");
const ErrorController = require("../src/Controllers/ErrorController")

function routes(app){
    app.get('/markers', MarkerAPIController.getAllStartMarkersController);
    app.post('/markers', ErrorController);
    app.put('/markers', ErrorController)
    app.delete('/markers', ErrorController)

    app.get('/walks', ErrorController);
    app.post('/walks', AddNewWalkController);
    app.put('/walks', ErrorController);
    app.delete('/walks', ErrorController);

    app.get('/markers/:id', MarkerAPIController.getDogWalkInfoController);
}

module.exports = routes;
