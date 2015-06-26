;(function () {

  'use strict';

  angular.module('Reeadr')

  .controller('BookSingle', ['$scope', 'ReeadrService', '$routeParams', '$rootScope',

    function($scope, ReeadrService, $routeParams, $rootScope) {
      $rootScope.$broadcast('PageChange', 'Single Book Page');

      console.log($routeParams);
      var id = $routeParams.id;
      ReeadrService.getBook(id).success(function(data) {
        $scope.book = data;
      });
    }

  ]);

}());
