const DbService = require("../../Services/DbService");

async function addNewRouteController(request, response) {
    const collection = await DbService.connectToDb();
    const data = await DbService.addNewRoute(collection, request.body);
}

module.exports.addNewRouteController = addNewRouteController