const express = require('express');
const router = require("./config/routes");
const port = 3000;
const cors = require('cors');
app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

router(app);
app.listen(port);
