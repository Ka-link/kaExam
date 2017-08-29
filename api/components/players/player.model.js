// Se establece el modelo con ayuda de mongoose
var mongoose = require('mongoose');
//Esquema de jugadores
var PlayerSchema = new mongoose.Schema({
    id: { type: String, require: true, unique: true },
    alias: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    money: { type: Number, require: true },
    photo: { type: String, require: true }
});
module.exports = mongoose.model('User', PlayerSchema);
