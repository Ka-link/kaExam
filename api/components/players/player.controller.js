var User = require('./player.model.js');

module.exports.save = function(req, res){
  var newUser = new User({
    id: req.body.id,
    alias: req.body.alias,
    name: req.body.name,
    money: req.body.money,
    photo: req.body.photo
  });

  newUser.save(function(err){
    if(err){
      res.json({success:false,msg:'El jugador ya existe, registre otro.'});
    }else{
      res.json({success:true,msg:'Se ha registrado correctamente el jugador.'});
    }
  });
};

module.exports.findAll = function(req,res){
  User.find().then(function(user){
    res.send(user);
  })
};

module.exports.update = function(req,res){
  User.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, user) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});
    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  })
};
