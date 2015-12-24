'use strict';

angular.module('prApp')
    .factory('registrationService',
    ['$http','$cookieStore','$rootScope', '$cookieStore',
        function($http,$cookieStore, $rootScope ){
            var service= {};

            service.Registration= function (username, password, email, callback) {
                var data = {username:username, password: password, email: email};

                $http.post('/auth/reg',data)
                    .success(function (response) {
                        callback(response);
                    })
                    .error(function (response){
                        callback(response);
                    });
            };
            service.ClearCredentials = function () {
                $rootScope.globals = {};
                $cookieStore.remove('globals');
                $http.defaults.headers.common.Authorization = 'Basic ';
            };


            return service;

        }]);