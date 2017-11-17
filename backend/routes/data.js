"use strict";

var data = require("../controllers/data");

exports.data = function(app){
    app.get('/data', data.getData);
    app.post('/data', data.addData);
};

