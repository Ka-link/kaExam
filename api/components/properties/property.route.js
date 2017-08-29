var express = require('express');
var router = express.Router();
var propertyController = require('./property.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Decalaracion de las rutas
router.route('/get_all_properties')
  .get(function(req, res){
      propertyController.findAll(req,res);
  });

router.route('/update_property')
  .put(function(req, res){
      propertyController.update(req,res);
  });

module.exports = router;
