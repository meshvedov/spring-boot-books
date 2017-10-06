'use strict';
angular.module('bookList').component('bookList', {
    template:
        '<table width="100%">'+
            '<tbody>'+
            '<tr>'+
                '<td>'+
                    '<caption><h3>Books List</h3></caption>'+
                    '<thead>'+
                    '<tr>'+
                        '<th>ID</th>'+
                        '<th>Author</th>'+
                        '<th>Title</th>'+
                        '<th>Description</th>'+
                        '<th>Print Year</th>'+
                        '<th>ISBN</th>'+
                        '<th>Read</th>'+
                        '<th></th>'+
                        '<th></th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                    '<tr ng-repeat="book in $ctrl.bookss">' +
                        '<td>{{book.id}}</td>' +
                        '<td>{{book.author}}</td>' +
                        '<td>{{book.title}}</td>' +
                        '<td>{{book.description}}</td>' +
                        '<td>{{book.printYear}}</td>' +
                        '<td>{{book.isbn}}</td>' +
                        '<td>{{book.read | checkmark}}</td>' +
                        '<td>' +
                            '<input type="image" name="image" ng-src="images/edit.png" width="25" ng-click="edit(book)">' +
                                '</td>' +
                        '<td>' +
                            '<input type="image" name="image" ng-src="images/remove.png" width="25" ng-click="delete(book.id)">' +
                                '</td>' +
                        '</tr>'+
                    '</tbody>'+
                '</td>'+
            '</tr>'+
            '</tbody>'+
        '</table>'
    ,
   controller: function BookListController($http) {
        var self = this;
       self.base_url = "http://localhost:8080";
       self.search_name = "";
       self.from = 0;
       self.step = 10;
       self.page = 1;

       $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
           .then(function (response) {
               self.bookss = response.data;
           });

   }
});