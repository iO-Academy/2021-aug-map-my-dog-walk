const DbService = require('../../Services/DbService');

function renderHomePage(request, response){
    response.render('Home')
}

module.exports.renderHomePage = renderHomePage

