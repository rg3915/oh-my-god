var mongoose = require('mongoose')
, 	Schema = mongoose.Schema;

module.exports = mongoose.model('Task', new Schema(require('../schemas/task')));