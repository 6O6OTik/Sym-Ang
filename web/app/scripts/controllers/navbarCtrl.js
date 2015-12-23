'use strict';

angular.module('prApp')
	.controller('NavigationCtrl', function($scope, $location) {
	$scope.isAvtiv = function(path) {
		var currenrPath = $location.path().split('/')[1].split('?')[0];
		return currenrPath === path.split('/')[1];
	};
});
