
class WalkValidator
{
    static validateHasLongitudeAndLatitude(object)
    {
        return object.hasOwnProperty("lng") && object.hasOwnProperty("lat")
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
            let hasLngAndLat = true
            let lng = true
            let lat = true
            array.forEach(marker => {
                isObj = (isObj && this.validateIsObject(marker))
                hasLngAndLat = (hasLngAndLat && this.validateHasLongitudeAndLatitude(marker))
                lng = (lng && this.validateLongitude(lng))
                lat = (lat && this.validateLatitude(lat))
            })
            return (isObj && hasLngAndLat && lng && lat)
        }
        return false
    }

    static validateNewWalk(newData) {
        return this.validateName(newData.name) && this.validateWalkLength(newData.length) && this.validateDifficulty(newData.difficulty) && this.validateMarkersArray(newData.markersArray)
    }
}
module.exports = WalkValidator;
