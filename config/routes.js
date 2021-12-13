const MongoClient = require('mongodb').MongoClient;
const mongoConnection = 'mongodb://root:password@localhost:27017';


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
