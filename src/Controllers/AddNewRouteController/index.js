const DbService = require("../../Services/DbService");
const Validator = require("../../Services/Validator");

async function addNewRouteController(request, response) {
    const collection = await DbService.connectToDb();
    console.log({validate: Validator.validateNewWalk(request.body)})
    if (Validator.validateNewWalk(request.body)) {
        try {
            let attempt = DbService.addNewRoute(collection, request.body)
            return response.status(201).json(attempt);
        } catch {
            return response.status(400)
        }
    } else {
        return response.status(400)
    }
}

module.exports.addNewRouteController = addNewRouteController
