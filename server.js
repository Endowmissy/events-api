const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

//this is where our routes will be handled from
const routes = require ('./routes/routes.js')(app);

const server = app.listen(3000, () => {
    console.log("Events displaying on port 3000");
});