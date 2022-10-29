const express = require('express');
const dboperation = require('./dboperation');
const app = express();

const port = 3000;

dboperation.getUsers().then(res=> {
    console.log(res);
})

app.listen(port, () => console.log("Listening on port " + port));