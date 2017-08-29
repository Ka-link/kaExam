// Declaración de las dependencias que se usarán
var express = require('express');
var	router = express.Router();
var playerController = require('./player.controller.js');

//Para las rutas que ocupan id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Se declaran las rutas
router.route('/save_user')
  .post(function(req, res){
    playerController.save(req, res);
  });

router.route('/get_all_users')
  .get(function(req, res){
      playerController.findAll(req,res);
  });

router.route('/update_money')
  .put(function(req, res){
      playerController.update(req,res);
  });

module.exports = router;

