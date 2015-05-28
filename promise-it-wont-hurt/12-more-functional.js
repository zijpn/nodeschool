var qhttp = require('q-io/http');
var _ = require('lodash');

var dbPath = _.bind(String.prototype.concat, 'http://localhost:7001/');

qhttp.read('http://localhost:7000')
.then(_.flowRight(qhttp.read, dbPath))
.then(_.flowRight(console.log, JSON.parse))
.then(null, console.error)
.done();
