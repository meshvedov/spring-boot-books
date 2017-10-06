'use strict';
angular.module('bookList').component('bookList', {

    templateUrl: 'book-list/book-list.template.html',

    controller: ['$http', function BookListController($http) {
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

        this.prevPage = function () {
            if (self.page > 1) {
                self.page--;
                self.from -= this.step;
                $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
                    .success(function (response) {
                        self.bookss = response;
                    });
            }
        };

        this.nextPage = function () {
            $http.get(self.base_url + "/size?name=" + self.search_name)
                .success(function (response) {
                    self.size = response;
                    if (self.size > self.from + self.step) {
                        self.page++;
                        self.from += self.step;
                        $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
                            .success(function (response) {
                                self.bookss = response;
                            });
                    }
                });
        };
    }]
});