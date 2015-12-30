'use strict';

angular.module('prApp')
    .controller('FooterCtrl', function($scope, $location) {
        $scope.isActive = function(path) {
            var currenrPath = $location.path().split('/')[1].split('?')[0];
            return currenrPath === path.split('/')[1];
        };
    });
