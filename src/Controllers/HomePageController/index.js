
function renderHomePage(request, response){
    response.render('Home', {data: {name: 'fido', distance: 20}})
}

module.exports.renderHomePage = renderHomePage
