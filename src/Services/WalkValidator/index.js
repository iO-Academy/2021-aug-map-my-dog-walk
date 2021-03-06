const Validator = require("../../Services/Validator");

class WalkValidator
{
    static validateHasLongitudeAndLatitude(object)
    {
        return object.hasOwnProperty("lng") && object.hasOwnProperty("lat")
    }

    static validatePosition(object)
    {
        return object.hasOwnProperty("position") && this.validateHasLongitudeAndLatitude(object.position)
    }

    static validateLatitude(lat)
    {
        return -90 <= lat && lat <= 90
    }

    static validateLongitude(lng)
    {
        return -180 <= lng && lng <= 180
    }

    // Validation for specific fields
    static validateName(walkName)
    {
        return (Validator.validateIsString(walkName) && Validator.validateShortStringLength(walkName) && Validator.validateIsAlphanumeric(walkName))
    }

    static validateWalkLength(length)
    {
        return Validator.validateIsNumber(parseInt(length)) && Validator.validateTimeRange(length)
    }

    static validateStartInstructions(instructions)
    {
        return Validator.validateIsString(instructions) && Validator.validateLongStringLength(instructions) && Validator.validateIsAlphanumeric(instructions)
    }

    static validateDifficulty(difficulty)
    {
        const validDifficulties = [1, 2, 3, 4, 5]
        return validDifficulties.includes(parseInt(difficulty), 0)
    }

    static validateMarkersArray(array)
    {
        console.log(array)
        if (Validator.validateIsArray(array)) {
            let isObj = true
            let hasPosition = true
            let lng = true
            let lat = true
            array.forEach(marker => {
                isObj = (isObj && Validator.validateIsObject(marker))
                hasPosition = (hasPosition && this.validatePosition(marker))
                lng = (lng && this.validateLongitude(marker.position.lng))
                lat = (lat && this.validateLatitude(marker.position.lat))
            })
            return (isObj && hasPosition && lng && lat)
        }
        return false
    }

    static validateNewWalk(newData) {
        return this.validateName(newData.walkName) && this.validateWalkLength(newData.length) && this.validateDifficulty(newData.difficulty) && this.validateStartInstructions(newData.startInstructions) && this.validateMarkersArray(newData.markersArray)
    }
}

module.exports = WalkValidator;
