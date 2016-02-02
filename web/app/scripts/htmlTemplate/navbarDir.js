'use strict';

angular.module('prApp')
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/views/navbar.html',
            controller: 'NavigationCtrl'
        };
    });