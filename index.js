const express = require('express')
const expressHandlebars = require('express-handlebars')
const router = require("./config/routes");
const port = 3000

app = express()

app.engine('handlebars', expressHandlebars.engine())
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.static('public'));

router(app)

app.listen(port)