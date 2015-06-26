;(function () {

  'use strict';
  angular.module('Reeadr')

  .service('ReeadrService', ['$http', 'PARSE', '$rootScope',

    function ($http, PARSE, $rootScope) {

      var endpoint = PARSE.URL + 'classes/Book/';

      // Book constructor
      var Book = function(options) {
        this.title = options.title;
        this.author = options.author;
        this.isbn = options.isbn;
        this.readstatus = options.readstatus;
      };

      // Get a single book
      this.getBook = function(id) {
        return $http.get(endpoint + id, PARSE.CONFIG);
      };

      // Get an array of all books
      this.getBooks = function() {
        $http.get(endpoint, PARSE.CONFIG).success(function(data) {
          $rootScope.$broadcast('AllBooksRetrieved', data);
        });
      };

      // Delete a single book
      this.deleteBook = function(indivBook) {
        var deleteURL = endpoint + indivBook.objectId;
        return $http.delete(deleteURL, PARSE.CONFIG);
      };

      // Add a new book
      this.addBook = function(newBook) {
        var book = new Book(newBook);

        // Submit book
        return $http.post(endpoint, book, PARSE.CONFIG);
      };

    }

  ])

}());
