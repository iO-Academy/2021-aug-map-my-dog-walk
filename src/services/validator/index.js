
class Validator
{
    // Each type of validation
     static validateIsString(string)
     {
         return typeof string === "string"
     }

     static validateIsNumber(number)
     {
         return typeof number === "number"
     }

     static validateIsArray(array)
     {
         return Array.isArray(array) && array !== []
     }

     static validateIsObject(object)
     {
         return typeof object === "object" && object !== {}
     }

     static validateShortStringLength(string)
     {
         return 5 <= string.length <= 20
     }

    static validateLongStringLength(string)
    {
        return 0 <= string.length <= 200
    }

    static validateTimeRange(time)
    {
        return 0 <= time <= 500
    }

    static validateIsAlphanumeric(string)
    {
         return string.match(/^[a-zA-Z0-9_]*$/)
    }

    static validateHasLongitudeAndLatitude(object)
    {
        return object.hasOwnProperty("longitude") && object.hasOwnProperty("latitude")
    }

    static validateLatitude(lat)
    {
        return -90 <= lat <= 90
    }

    static validateLongitude(lon)
    {
        return -180 <= lon <= 180
    }

    // Validation for specific fields
    static validateName(name)
    {
        return this.validateIsString(name) && this.validateShortStringLength(name) && this.validateIsAlphanumeric(name)
    }

    static validateWalkLength(length)
    {
        return this.validateIsNumber(length) && this.validateTimeRange(length)
    }

    static validateStartInstructions(instructions)
    {
        return this.validateIsString(instructions) && this.validateLongStringLength(instructions) && this.validateIsAlphanumeric(instructions)
    }

    static validateDifficulty(difficulty)
    {
        const validDifficulties = [1, 2, 3, 4, 5]
        return validDifficulties.includes(difficulty, 0)
    }

    static validateMarkersArray(array)
    {
        if (this.validateIsArray(array)) {
            let isObj = true
            let hasLongAndLat = false
            let lon = true
            let lat = true
            array.forEach(marker => {
                isObj = (isObj && this.validateIsObject(marker))
                hasLongAndLat = (hasLongAndLat && this.validateHasLongitudeAndLatitude(marker))
                lon = (lon && this.validateLongitude(lon))
                lat = (lat && this.validateLongitude(lat))
            })
            return (isObj && hasLongAndLat && lon && lat)
        }
        return false
    }

    static validateNewWalk(newData) {
         return this.validateName(newData.name) && this.validateWalkLength(newData.length) && this.validateDifficulty(newData.difficulty)
    }
}

module.exports = Validator;
