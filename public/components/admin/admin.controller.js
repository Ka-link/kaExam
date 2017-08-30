(function() {
	'use strict'
	angular
	.module('myApp')
	.controller('adminController', adminController);
	adminController.$inject = ['$http', 'playerService', 'Upload', 'ImageService', 'propertiesService'];

	// Inicia función adminController
	function adminController($http, playerService, Upload, ImageService, propertiesService) {
		var vm = this;
		vm.alert1 = {state:false};
		vm.buyAlert = {state: false};
		vm.buyAlert2 = {state: false};
		vm.buyAlert3 = {state: false};
		vm.cloudObj = ImageService.getConfiguration(); //Para la imagen
		loadPlayers();
		// Carga la lista de jugadores
		function loadPlayers() {
			playerService.getUsers().then(function (response){
				vm.users = response.data;
			})
		}
		// Carga la lista de propiedades
		function loadProperties() {
			propertiesService.getProps().then(function (response){
				vm.properties = response.data;
			})
		}

		// Función que se llama a sí sola para cargar la info actual
		function init() {
			loadPlayers();
			// vm.users = playerService.getUsers(); //Lista de todos los jugadores
			vm.user = {}; //Cleans the form
			// vm.properties = propertiesService.getProps(); //LIsta de propiedades
			loadProperties();
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
			// var userVal = playerService.valNewUser(newUser); //Verifica si el usuario ya está registrado o no
			// if (userVal === false) {
				// playerService.setUser(newUser); //Guarda
				playerService.setUser(newUser).then(function (response) {
					vm.users = response.data;
				});
				vm.alert1 = {state:true};
				// $('#frmSuccess').modal(); //Validación, muestra un mensaje que se realizó el form
			// }else{
			// 	// $('#frmError').modal();
			// } //Cierra if & else
			init();
		} //Cierra vm.save

		// Realiza la compra
		vm.purchase = function(infoPurchase) {
			var playerList = vm.users;
			var propsList = vm.properties;
			// console.log(playerList);
			// console.log(propsList);
			var property = propertiesService.getProperty(infoPurchase.property, propsList);
			var user = playerService.getUser(infoPurchase.user, playerList);
			// console.log(property);
			// console.log(user);
			if (property.ownedby == -1) {
				if (user.money >= property.price) {
					user.money -= property.price;
					property.ownedby = user.id;
					// propertiesService.updateProps(property); //Actualiza la información de las propiedades, si ya tienen dueño
					propertiesService.updateProps(property).then(function (response) {
						vm.properties = response.data;
					})
					// playerService.updateMoney(user); //Actualiza la información del usuario, se le resta la cantidad de dinero
					playerService.updateMoney(user).then(function (response) {
						vm.users = response.data;
					})
					vm.buyAlert = {state: true};
				}else{
					vm.buyAlert2 = {state: true};
				}
			}else{
				vm.buyAlert3 = {state: true};
			} //Cierran los if
			init();
		} //Cierra vm.purchase

	} //Cierra la función adminController

})(); //Cierra toda la función anónima de admin.controller
