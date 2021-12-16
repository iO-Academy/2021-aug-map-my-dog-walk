
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
         return (Array.isArray(array) && (array.length !== 0))
     }

     static validateIsObject(object)
     {
         return typeof object === "object" && object !== {}
     }

     static validateShortStringLength(string)
     {
         return 5 <= string.length && string.length <= 20
     }

    static validateLongStringLength(string)
    {
        return 0 <= string.length && string.length <= 200
    }

    static validateTimeRange(time)
    {
        return 0 <= time && time <= 500
    }

    static validateIsAlphanumeric(string)
    {
        let regex = /^[a-z ,.'-]+$/i
         return regex.test(string)
    }
}

module.exports = Validator;
