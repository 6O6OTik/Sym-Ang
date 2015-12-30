'use strict';

angular.module('prApp')
    .directive('footer', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/views/footer.html',
            controller: 'FooterCtrl'
        };
    });