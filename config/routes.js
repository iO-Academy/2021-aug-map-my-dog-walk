const HomePageController = require("../src/Controllers/HomePageController");
const MarkerAPIController = require("../src/Controllers/MarkerAPIController");

function routes(app){
    app.get('/', HomePageController.renderHomePage)
    app.get('/markers', MarkerAPIController.getAllStartMarkers);
}

module.exports = routes;
