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

      // Re-populate list without deleted book
      $scope.deleteMe = function(indivBook) {
        ReeadrService.deleteBook(indivBook).success(function() {
          $scope.bookList = _.without($scope.bookList, indivBook);
          $location.path('/');
        });
      };
    }

  ]);

}());
