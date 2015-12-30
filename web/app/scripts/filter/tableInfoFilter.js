
'use strict';
angular.module('prApp')
    .filter('startForm', function(){
    return function (input, start) {
        start = +start;
        return input.slice(start);
    }
    });
//| start:currentPage*pageSize | limitTo:pageSize