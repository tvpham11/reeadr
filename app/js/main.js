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
  });

}());
