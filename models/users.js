var mongoose = require('../utils/mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  email: {
    type:String,
    required: true,
    unique: true
  },
  is_active: Boolean,
  is_admin: Boolean,
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

userSchema.virtual('get_absolute_url').get(function() {
  return '/api/users/' + this._id;
});

userSchema.virtual('fullname').get(function() {
  return this.name.first + ' ' + this.name.last;
});

userSchema.set('toJSON', {virtuals: true});

userSchema.pre('save', function(next) {
  this.updated = new Date();
  next();
})

var User = mongoose.model('User', userSchema);

module.exports = User;
