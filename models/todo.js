var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema)