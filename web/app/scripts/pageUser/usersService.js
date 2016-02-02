'use strict';

angular.module('prApp')
    .factory('UserPageFact',function($resource){
        var taskFactoru = {
            userTaskInfo: $resource('/auth/taskId',{},{
                fullTaskHistory: {method: 'GET', params: {userId: '@id'}, isArray:true }
            }),
            userTaskAdd: $resource('/auth/addTaskUser', {},{
                addTaskTable: { method: 'POST', params: {userId: '@id', taskTitle: '@item.taskTitle', taskBody: '@item.taskBody', taskStatus: '@item.taskStatus'}}
            }),
            userTaskEdit: $resource('/auth/editTaskUser',{},{
               editTaskTable:{ method : 'POST', params:{userId: '@id'}}
            }),
            userTaskDelete: $resource('/auth/deleteTaskUser',{}, {
                deleteTaskTable:{ method:'DELETE', params:{ userId: '@id'}}
            })
        };
        return taskFactoru;
    });


