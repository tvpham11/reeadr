;(function () {

  'use strict';

  angular.module('Reeadr')

  .controller('BookList', ['$scope', '$location', 'ReeadrService',

    function($scope, $location, ReeadrService) {

      // Call method to retrieve all books
      ReeadrService.getBooks().success(function (data) {
        $scope.bookList = data.results;
      });

    }

  ]);

}());
