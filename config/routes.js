const MarkerAPIController = require("../src/Controllers/MarkerAPIController");
const AddNewWalkController = require("../src/Controllers/AddNewWalkController");
const ErrorController = require("../src/Controllers/ErrorController");


function routes(app){
    app.get('/markers', MarkerAPIController.getAllStartMarkersController);
    app.post('/markers', ErrorController);
    app.put('/markers', ErrorController);
    app.delete('/markers', ErrorController);

    app.get('/markers/:id', MarkerAPIController.getDogWalkInfoController);

    app.get('/markers/:id', MarkerAPIController.getDogWalkInfoController);
    app.post('/markers/:id', ErrorController);
    app.put('/markers/:id', MarkerAPIController.addAdditionalRouteMarkersController);
    app.delete('/markers/:id', ErrorController);


    app.get('/walks', ErrorController);
    app.post('/walks', AddNewWalkController);
    app.put('/walks', ErrorController);
    app.delete('/walks', ErrorController);
}

module.exports = routes;
