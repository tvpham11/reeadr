;(function () {

  'use strict';

  angular.module('Reeadr')

  .controller('Book', ['$scope', '$location', 'ReeadrService', '$rootScope',

    function($scope, $location, ReeadrService, $rootScope) {

      $rootScope.$broadcast('PageChange', 'Add/Edit Page');

      // Add book method
      $scope.addBook = function(book) {
        ReeadrService.addBook(book).success(function() {
          // Re-route to home upon submission
          $location.path('/');
          // Clear form
          $scope.book = {};
        });
      };

    }

  ]);

}());
