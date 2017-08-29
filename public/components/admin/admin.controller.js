(function() {
	'use strict'
	angular
	.module('myApp')
	.controller('adminController', adminController);
	adminController.$inject = ['playerService', 'Upload', 'ImageService', 'propertiesService'];

	// Inicia función adminController
	function adminController(playerService, Upload, ImageService, propertiesService) {
		var vm = this;
		vm.cloudObj = ImageService.getConfiguration(); //Para la imagen

		// Función que se llama a sí sola para cargar la info actual
		function init() {
			vm.users = playerService.getUsers(); //Lista de todos los jugadores
			vm.user = {}; //Cleans the form
			vm.properties = propertiesService.getProps(); //LIsta de propiedades
		}
		init();

		// Presave de la foto
		vm.presave = function(newUser) {
			vm.loading = true;
			vm.cloudObj.data.file = document.getElementById("photo").files[0];
			Upload.upload(vm.cloudObj)
				.success(function(data) {
					vm.user.photo = data.url;
					vm.save(newUser);
				}) //Cierra la función anónima
				.error(function(data) {})
			vm.loading = false;
		} //Cierra el presave

		vm.save = function(newUser) {
			newUser.money = 1000;
			var userVal = playerService.valNewUser(newUser); //Verifica si el usuario ya está registrado o no
			if (userVal === false) {
				playerService.setUser(newUser); //Guarda
				// $('#frmSuccess').modal(); //Validación, muestra un mensaje que se realizó el form
			}else{
				// $('#frmError').modal();
			} //Cierra if & else
			init();
		} //Cierra vm.save

		// Realiza la compra
		vm.purchase = function(infoPurchase) {
			var property = propertiesService.getProperty(infoPurchase.property);
			var user = playerService.getUser(infoPurchase.user);
			// console.log(property);
			// console.log(user);
			if (property.ownedby === -1) {
				if (user.money >= property.price) {
					user.money -= property.price;
					property.ownedby = user.id;
					propertiesService.updateProps(property); //Actualiza la información de las propiedades, si ya tienen dueño
					playerService.updateMoney(user); //Actualiza la información del usuario, se le resta la cantidad de dinero
				}
			} //Cierran los if
		} //Cierra vm.purchase

	} //Cierra la función adminController

})(); //Cierra toda la función anónima de admin.controller
