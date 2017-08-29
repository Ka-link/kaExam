var express = require('express');
var router = express.Router();
var userController = require('./player.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Decalaracion de las rutas
router.route('/save_user')
  .post(function(req, res){
    userController.save(req, res);
  });

router.route('/get_all_users')
  .get(function(req, res){
      userController.findAll(req,res);
  });

router.route('/update_money')
  .put(function(req, res){
      userController.update(req,res);
  });

module.exports = router;
