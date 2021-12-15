const DbService = require("../../Services/DbService");
const Validator = require("../../Services/Validator");
const WalkValidator = require("../../Services/WalkValidator");

async function addNewRouteController(request, response) {
    const collection = await DbService.connectToDb();
    if (WalkValidator.validateNewWalk(request.body)) {
        try {
            DbService.addNewRoute(collection, request.body)
            return response.status(201).json({
                success: true,
                message: "Route added"
                });
        } catch {
            return response.status(400).json({
                success: false,
                message: 'Something went wrong!'
            })
        }
    } else {
        return response.status(400).json({
            success: false,
            message: 'Validation failed'
        })
    }
}

module.exports.addNewRouteController = addNewRouteController
