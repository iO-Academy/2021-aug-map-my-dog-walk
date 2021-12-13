const HomePageController = require("../src/Controllers/HomePageController");


function routes(app){

    app.get('/', HomePageController.renderHomePage)

}

module.exports = routes
