var mongoose = require('mongoose');
var uri = 'mongodb://localhost/test'
var options = { promiseLibrary: require('bluebird') };
mongoose.connect(uri, options);
mongoose.Promises = global.Promises;

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Open connection')
});


module.exports = mongoose;
