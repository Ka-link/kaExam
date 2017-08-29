(function() {
    angular
        .module('myApp')
        .service('playerService', playerService);

    function playerService($http) {
        var users = [];
        // Se declara el API para poder acceder a estos datos desde otro lugar
        var publicAPI = {
            setUser: _setUser,
            getUsers: _getUsers,
            getUser: _getUser,
            updateMoney: _updateMoney
            // valNewUser: _valNewUser
        };
        return publicAPI;

        // Guarda el jugador
        function _setUser(newUser) {
            // var usersList = _getUsers();
            // usersList.push(newUser);
            // localStorage.setItem('lsUsersList', JSON.stringify(usersList));
            return $http.post('http://localhost:3000/api/save_user', newUser);
        }
        // Obtiene la lista de jugadores
        function _getUsers() {
            // var usersList = JSON.parse(localStorage.getItem('lsUsersList'));
            // if (usersList == null) {
            //     usersList = users; //Lista de jugadores quemados
            // }
            // return usersList;
            return $http.get('http://localhost:3000/api/get_all_users');
        }
        // Busca al comprador
        function _getUser(customer, playerList) {
            //var usersList = _getUsers();
            for (var i = 0; i < playerList.length; i++) {
                if (customer == playerList[i].id) {
                    return playerList[i];
                }
            }
        }
        // Actualiza la cantidad de dinero del jugador
        function _updateMoney(userPurchase) {
            // var usersList = _getUsers();
            // for (var i = 0; i < usersList.length; i++) {
            //     if (usersList[i].id == userPurchase.id) {
            //         usersList[i] = userPurchase;
            //     }
            // }
            // localStorage.setItem('lsUsersList', JSON.stringify(usersList));
            return $http.put('http://localhost:3000/api/update_money', userPurchase);
        }
        // // Verifica si existe el jugador o no
        // function _valNewUser(newUser) {
        //     var usersList = _getUsers();
        //     var userVal = false;
        //     for (var i = 0; i < usersList.length; i++) {
        //         if(usersList[i].id == newUser.id) {
        //             userVal = true;
        //         }
        //     }
        //     return userVal;
        // }
        
    }
})();
