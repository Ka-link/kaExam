(function() {
    angular
        .module('myApp')
        .service('playerService', playerService);

<<<<<<< HEAD
    function playerService() {
        var users = [{
                id: 001,
                name: 'Goku',
                alias: 'Kokkun',
                money: 1500,
                photo: 'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
            },
            {
                id: 002,
                name: 'Piccolo',
                alias: 'PikOREO',
                money: 1500,
                photo: 'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
            },
            {
                id: 003,
                name: 'Logan',
                alias: 'Lovezno',
                money: 1500,
                photo: 'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
            },
            {

                id: 004,
                name: 'Bomberman',
                alias: 'Don Pepe y los Globos',
                money: 1500,
                photo: 'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
            }
        ];
=======
    function playerService($http) {
        var users = [];
>>>>>>> Kaleen
        // Se declara el API para poder acceder a estos datos desde otro lugar
        var publicAPI = {
            setUser: _setUser,
            getUsers: _getUsers,
            getUser: _getUser,
<<<<<<< HEAD
            updateMoney: _updateMoney,
            valNewUser: _valNewUser
        };
        return publicAPI;

        // Guarda el jjugador
        function _setUser(newUser) {
            var usersList = _getUsers();
            usersList.push(newUser);
            localStorage.setItem('lsUsersList', JSON.stringify(usersList));
        }
        // Obtiene la lista de jugadores
        function _getUsers() {
            var usersList = JSON.parse(localStorage.getItem('lsUsersList'));
            if (usersList == null) {
                usersList = users; //Lista de jugadores quemados
            }
            return usersList;
        }
        // Busca al comprador
        function _getUser(customer) {
            var usersList = _getUsers();
            for (var i = 0; i < usersList.length; i++) {
                if (customer == usersList[i].id) {
                    return usersList[i];
=======
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
>>>>>>> Kaleen
                }
            }
        }
        // Actualiza la cantidad de dinero del jugador
        function _updateMoney(userPurchase) {
<<<<<<< HEAD
            var usersList = _getUsers();
            for (var i = 0; i < usersList.length; i++) {
                if (usersList[i].id == userPurchase.id) {
                    usersList[i] = userPurchase;
                }
            }
            localStorage.setItem('lsUsersList', JSON.stringify(usersList));
        }
        // Verifica si existe el jugador o no
        function _valNewUser(newUser) {
            var usersList = _getUsers();
            var userVal = false;
            for (var i = 0; i < usersList.length; i++) {
                if(usersList[i].id == newUser.id) {
                    userVal = true;
                }
            }
            return userVal;
        }
=======
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
>>>>>>> Kaleen
        
    }
})();
