;(function () {

  'use strict';
  angular.module('Reeadr')

  .service('ReeadrService', ['$http', 'PARSE',

    function ($http, PARSE) {

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
        return $http.get(endpoint, PARSE.CONFIG);
      };

      // Delete a single book
      this.deleteBook = function(indivBook) {
        var deleteURL = endpoint + indivBook.objectId;
        return $http.delete(deleteURL, PARSE.CONFIG);
      };

      // Add a new book
      this.addBook = function(newBook) {
        var book = new Book(newBook);
        return $http.post(endpoint, book, PARSE.CONFIG);
      };

      // Edit a single book
      this.editBook = function(indivBook) {
        var editURL = endpoint + indivBook.objectId;
        return $http.put(editURL, indivBook, PARSE.CONFIG);
      }

    }

  ])

}());
