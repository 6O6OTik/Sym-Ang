'use strict';

angular.module('prApp')
    .directive('navbar', function () {
        return {
            restrict: 'E',
            //templateUrl: 'views/navbar.html',
            controller: 'NavigationCtrl'
        };
    });