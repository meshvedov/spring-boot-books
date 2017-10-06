'use strict';
angular.module('bookList').component('bookList', {

    templateUrl: 'book-list/book-list.template.html',

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

        this.delete = function(id) {
            $http.delete(this.base_url + "/delete/" + id).then(function () {
                $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
                    .then(function (response) {
                        self.bookss = response.data;
                    });
            });
        };
    }
});