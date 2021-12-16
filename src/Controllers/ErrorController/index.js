function ErrorController() {
    return {
        success: false,
        message: 'Stop doing that - HTTP method is not supported on this URL'
    }
}

module.exports = ErrorController