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
        self.canRead = true;

        $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
            .then(function (response) {
                self.bookss = response.data;
            });

        var gets = function() {
            $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
                .then(function (response) {
                    self.bookss = response.data;
                });
        };

        this.delete = function(id) {
            $http.delete(this.base_url + "/delete/" + id).then(function () {
                // $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
                //     .then(function (response) {
                //         self.bookss = response.data;
                //     });
                gets();
            });
        };

        this.prevPage = function () {
            if (self.page > 1) {
                self.page--;
                self.from -= this.step;
                // $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
                //     .success(function (response) {
                //         self.bookss = response;
                //     });
                gets();
            }
        };

        this.nextPage = function () {
            $http.get(self.base_url + "/size?name=" + self.search_name)
                .success(function (response) {
                    self.size = response;
                    if (self.size > self.from + self.step) {
                        self.page++;
                        self.from += self.step;
                        // $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
                        //     .success(function (response) {
                        //         self.bookss = response;
                        //     });;
                        gets();
                    }
                });
        };

        this.edit = function (book) {
            self.book0 = book;
            self.book0.readAlready = false;
            self.canRead = false;
        };

        this.search = function (name) {
            self.search_name = name;
            self.page = 1;
            self.from = 0;
            // $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
            //     .success(function (response) {
            //         self.bookss = response;
            //     });
            gets();
        };

        this.clearsearch = function () {
            self.page = 1;
            self.from = 0;
            self.search_name = "";
            gets();
        };

        this.newBook = function () {
            self.canRead = true;
            refresh();
        };

        this.update = function (id, book1) {
            $http.put(self.base_url + "/update/" + id, book1).then(function () {
                // $http.get($scope.base_url + "/users?from=" + $scope.from + "&step=" + $scope.step + "&name=" + $scope.search_name)
                //     .success(function (response) {
                //         $scope.users = response;
                //     });
                gets();
                refresh();
            });
        };

        this.add = function (book2) {
            $http.post(self.base_url + "/add", book2).then(function () {
                // $http.get(self.base_url + "/books?from=" + self.from + "&step=" + self.step + "&name=" + self.search_name)
                //     .success(function (response) {
                //         self.bookss = response;
                //
                //     });
                gets();
                refresh();
            })
        };

        var refresh = function () {
            self.book0.id = null;
            self.book0.author = "";
            self.book0.title = "";
            self.book0.description = "";
            self.book0.isbn = "";
            self.book0.printYear = 0;
            self.book0.readAlready = false;
        };
    }]
});