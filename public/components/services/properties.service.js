(function() {
    'use strict'
    angular
        .module('myApp')
        .service('propertiesService', propertiesService);

    function propertiesService($http) {
        var properties = [];
        // Declaración del API para acceder a ella desde otro lugar
        var publicAPI = {
            getProps: _getProps,
            updateProps: _updateProps,
            getProperty: _getProperty
        };
        return publicAPI;

        // Obtiene la lista de propiedades
        function _getProps() {
            // var propertiesList = JSON.parse(localStorage.getItem('lsPropertiesList'));
            // if (propertiesList == null) {
            //     propertiesList = properties; //Devuelve la lista de lugares quemados
            // }
            // return propertiesList;
            return $http.get('http://localhost:3000/api/get_all_properties');
        }

        // Busca una propiedad en específico para realizar la transacción
        function _getProperty(property, propsList) {
            // console.log(propertiesList)
            // var propertiesList = _getProps();
            for (var i = 0; i < propsList.length; i++) {
                if (property == propsList[i].id) {
                    return propsList[i];
                }
            }
        }

        // Actualiza la información de la propiedad para realizar la transacción
        function _updateProps(property) {
            // var propertiesList = _getProps();
            // for (var i = 0; i < propertiesList.length; i++) {
            //     if (property.id == propertiesList[i].id) {
            //         propertiesList[i] = property;
            //     }
            // }
            // localStorage.setItem('lsPropertiesList', JSON.stringify(propertiesList));
            return $http.put('http://localhost:3000/api/update_property', property)
        } //Cierra el updateProps

    }
})();
