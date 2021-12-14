const express = require('express');
const router = require("./config/routes");
const port = 3000;
var cors = require('cors');
app = express();
app.use(cors());


app.use(express.json());
app.use(express.static('public'));

router(app);
app.listen(port);
