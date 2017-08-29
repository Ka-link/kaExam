(function(){
  angular
  .module('appRoutes', ['ui.router'])
  .config(configuration);

  configuration.$inject = ['$stateProvider','$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('admin',{
          url : '/admin',
          templateUrl : 'components/admin/admin.view.html',
          controller: 'adminController',
          controllerAs: 'vm'
        })
      $urlRouterProvider.otherwise('/admin');
    }
})();
