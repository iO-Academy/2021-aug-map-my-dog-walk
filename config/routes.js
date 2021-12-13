


function routes(app){

    app.get('/', (request, response) =>{
        response.render('Home')
    })

}

module.exports = routes
