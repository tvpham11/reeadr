;(function () {

  'use strict';

  angular.module('Reeadr', ['ngRoute'])

  .constant('PARSE', {

    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'pztDT2ZdNHGo1nxnUgVOjWgBWaHoFxamvPeg90b7',
        'X-Parse-REST-API-Key'  : '9mXq8eh2TWSZf4A63znE96iJsaVfaLJOHAgkskuL'
      }
    }
  })

  .config(['$routeProvider',
    function($routeProvider) {
      // Home page displays books user is currently reading
      $routeProvider.when('/', {
        controller: 'BookList',
        templateUrl: 'js/book/home.tpl.html'
      })
      // Books to read
      .when('/toread', {
        controller: 'BookList',
        templateUrl: 'js/book/toread.tpl.html'
      })
      // Books already read
      .when('/alreadyread', {
        controller: 'BookList',
        templateUrl: 'js/book/alreadyread.tpl.html'
      })
      // Individual book info
      .when('/book/:id', {
        controller: 'BookSingle',
        templateUrl: 'js/book/bookinfo.tpl.html'
      })
      // Adit/Edit book info page
      .when('/add_edit', {
        controller: 'Book',
        templateUrl: 'js/book/add_edit.tpl.html'
      });

    }

  ]);

}());
