"use strict";

var constants = require('../helper/constants'),
    jsonfile = require('jsonfile')

function getData(req, res) {

    var dataPath = 'data/result.json',
        bankPath = 'data/singleBank.json';

    jsonfile.readFile(dataPath, function (error, result) {
        if (error) { return res.status(400).json({ "status": false, "response": null, "error": error }); }

        console.log(dataPath, result);

        jsonfile.readFile(bankPath, function (error, bank) {
            if (error) { return res.status(400).json({ "status": false, "response": null, "error": error }); }

            console.log(bankPath, bank);
            res.status(200).json({ "status": true, "response": { 'result': result, 'bank': bank }, "error": null });
        })
    })
}

function addData(req, res) {

    res.status(200).json({ "status": true, "response": "Add Data works", "error": null });
}

exports.getData = getData;
exports.addData = addData;