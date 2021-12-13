const express = require('express')
const router = require("./config/routes");
const port = 3000

app = express()

app.use(express.json());
app.use(express.static('public'));

router(app)

app.listen(port)
