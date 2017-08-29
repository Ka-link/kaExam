var property = require('./property.model.js');

module.exports.findAll = function(req,res){
  property.find().then(function(properties){
    res.send(properties);
  })
};

module.exports.update = function(req,res){
  property.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, user) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});
    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  })
};
