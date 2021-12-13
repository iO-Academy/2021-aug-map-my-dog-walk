const HomePageController = require("../src/Controllers/HomePageController");

function routes(app){
    // app.get('/', HomePageController.renderHomePage)
    app.get('/', HomePageController.renderAllStartMarkers);
}

module.exports = routes;
