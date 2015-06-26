;(function () {

  'use strict';
  angular.module('Reeadr')

  .controller('NavCtrl', ['$scope', '$rootScope',

    function($scope, $rootScope) {

      $rootScope.$on('PageChange', function(event, data) {
        console.log('Page has changed to ' + data);
      });
    }

  ]);

}());
