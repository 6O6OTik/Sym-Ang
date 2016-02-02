'use strict';

angular.module('prApp')
    .factory('TableService', function ($resource){
       var factory = {
           userTableInfo: $resource('/show', {},{
               infoTab: {method: 'GET', isArray: true}
           }),
           userTableAdd: $resource('/add',{}, {
             addUserTable: {method: 'POST', params: {userName: '@item.name', userAge: '@item.age' }}
           }),
           userTableEdit: $resource('/edit', {},{
               editUserTable:{method: 'POST', params:{userId: '@id'}}
           }),
           userTableDel: $resource('/delete', {}, {
               deleteUserTable: { method: 'DELETE', params: {userId: '@id'}}
           })
       } ;
        return factory;
    });
