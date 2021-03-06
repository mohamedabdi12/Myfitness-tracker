const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myfitness-tracker", { useNewUrlParser: true });


require('./routes/api-routes')(app)
require('./routes/html-routes')(app)

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});