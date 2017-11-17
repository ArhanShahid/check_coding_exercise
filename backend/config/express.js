var express = require('express'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    cors = require('cors'),    
    path = require('path');

module.exports = function (app) {

    app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
    app.use(bodyParser.json({ limit: '10mb' }));
    app.disable('x-powered-by');
    app.use(methodOverride());
    app.use(cors());
    app.use(express.static(path.join(__dirname, '../client')));

};