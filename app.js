const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let port = process.env.PORT;
if ( port == null || port == "") {
    port = 3000;
}

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);