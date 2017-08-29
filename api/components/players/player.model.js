//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var UserSchema = new mongoose.Schema({
  id: {type: String, require: true, unique: true},
  alias: {type: String, require: true, unique: true},
  name: {type: String, require: true},
  money: {type: Number, require: true},
  photo: {type: String, require: true}
});

module.exports = mongoose.model('user', UserSchema);
