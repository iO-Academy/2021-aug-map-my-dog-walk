const DbService = require('../../Services/DbService');

function renderHomePage(request, response){
    response.render('Home')
}

async function renderAllStartMarkers(request, response) {
    const collection = await DbService.connectToDb();
    const markers = await DbService.getAllStartMarkers(collection);
    response.json(markers);
    // response.render('Home')
}

module.exports.renderHomePage = renderHomePage
module.exports.renderAllStartMarkers = renderAllStartMarkers
