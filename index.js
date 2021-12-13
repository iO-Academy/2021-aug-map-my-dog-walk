const express = require('express')
const expressHandlebars = require('express-handlebars')
const MongoClient = require('mongodb').MongoClient;
const mongoConnection = 'mongodb://root:password@localhost:27017';
const router = require("./config/routes");
const port = 3000

app = express()

app.engine('handlebars', expressHandlebars.engine())
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.static('public'));

router(app)

app.listen(port)
