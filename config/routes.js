const {MongoClient} = require("mongodb");

function routes(app){
    app.get('/', async (request, response) => {
        const connection = await MongoClient.connect(mongoConnection);
        const db = connection.db('canineCompass')
        const collection = db.collection('dogWalks')
        const data = await collection.find({}).toArray()
        response.json(data)
    })
}

module.exports = routes
