var mongoose = require('mongoose');
//Esquema de propiedades
var PropertySchema = new mongoose.Schema({
  name: {type: String, require: true},
  id: {type: String, require: true},
  posistion: {type: String, require: true},
  price: {type: Number, require: true},
  rent: {type: String, require: true},
  multpliedrent: [],
  housecost: {type: String, require: true},
  group: {type: String, require: true},
  ownedby: {type: String, require: true},
  buildings: {type: String, require: true},
  mortgaged: {type: String, require: true},
  probability: {type: String, require: true},
  rel: {
    Square: {type: String},
    Probability_Jail_Short: {type: String},
    Rank: {type: String},
    Probability_Jail_Long: {type: String}
  },
  ohousecost: {type: String, require: true},
  oprice: {type: String, require: true},
  averageProbability: {type: String, require: true}
});

module.exports = mongoose.model('Property', PropertySchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
