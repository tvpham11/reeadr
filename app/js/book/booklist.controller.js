;(function () {

  'use strict';

  angular.module('Reeadr')

  .controller('BookList', ['$scope', 'ReeadrService',
    function($scope, ReeadrService) {

      // Call method to retrieve all books
      ReeadrService.getBooks().success(function (data) {
        $scope.bookList = data.results;
      });

      // Re-populate list without deleted book
      $scope.deleteMe = function(indivBook) {
        ReeadrService.deleteBook(indivBook).success(function() {
          $scope.bookList = _.without($scope.bookList, indivBook);
        });
      };

      // Look at how to re-route to edit details !!!!!!!!!!!
      $scope.editMe = function(indivBook) {
        ReeadrService.editBook(indivBook).success(function() {
          $scope.bookList = _.without($scope.bookList, indivBook);
        });
      };
    }

  ]);

}());
