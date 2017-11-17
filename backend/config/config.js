
var path = require('path');

var config = {

    root: path.resolve(__dirname + '/../'),

    port: process.env.PORT || 3000,

    logMaxFileSize: 1048576,

    logMaxFiles: 10,

};

module.exports = config;
