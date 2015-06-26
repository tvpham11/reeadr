;(function () {

  'use strict';

  angular.module('Reeadr')

  .controller('BookList', ['$scope', 'ReeadrService', '$rootScope',
    function($scope, ReeadrService, $rootScope) {

      $rootScope.$broadcast('PageChange', 'Home Page');

      // Call method to retrieve all books
      ReeadrService.getBooks();

      $rootScope.$on('AllBooksRetrieved', function(event, data) {
        $scope.bookList = data.results;
      });

      $scope.deleteMe = function(indivBook) {

        ReeadrService.deleteBook(indivBook).success(function() {
          $scope.bookList = _.without($scope.bookList, indivBook);
        });
      };
    }

  ]);

}());
