const DbService = require("../../Services/DbService");
const Validator = require("../../Services/Validator");

async function addNewRouteController(request, response) {
    const collection = await DbService.connectToDb();
    if (Validator.validateNewWalk(request.body)) {
        response.sendStatus(201).json(DbService.addNewRoute(collection, request.body));
    } else {
        response.sendStatus(400)
    }
}

module.exports.addNewRouteController = addNewRouteController
