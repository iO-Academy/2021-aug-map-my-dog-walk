const DbService = require("../../Services/DbService");
const WalkValidator = require("../../Services/WalkValidator");

async function addNewWalkController(request, response) {
    const collection = await DbService.connectToDb();
    console.log(request.body)
    if (WalkValidator.validateNewWalk(request.body)) {
        try {
            await DbService.addNewWalk(collection, request.body)
            return response.status(201).json({
                success: true,
                message: "New walk added!"
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
            message: 'Validation failed :( Check your input!'
        })
    }
}

module.exports = addNewWalkController
