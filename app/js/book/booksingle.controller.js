;(function () {

  'use strict';

  angular.module('Reeadr')

  .controller('BookSingle', ['$scope', 'ReeadrService', '$routeParams', '$location',

    function($scope, ReeadrService, $routeParams, $location) {

      var id = $routeParams.id;
      ReeadrService.getBook(id).success(function(data) {
        $scope.book = data;
      });

      // Edit book
      $scope.editMe = function(indivBook) {
        ReeadrService.editBook(indivBook).success(function() {
          $location.path('/');
        });
      };
    }

  ]);

}());
