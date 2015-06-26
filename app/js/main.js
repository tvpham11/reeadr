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

      // Edit book info page
      .when('/edit/:id', {
        controller: 'BookSingle',
        templateUrl: 'js/book/edit.tpl.html'
      })

      // Add book info page
      .when('/add', {
        controller: 'Book',
        templateUrl: 'js/book/add.tpl.html'
      })
      // User registration
      .when('/register', {
        controller: 'User',
        templateUrl: 'js/user/register.tpl.html'
      })
      // User log-in
      .when('/login', {
        controller: 'User',
        templateUrl: 'js/user/login.tpl.html'
      });
    }

  ]);

}());
