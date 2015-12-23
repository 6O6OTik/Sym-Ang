'use strict';

angular.module('prApp')
    .controller('tableCtrl', ['$scope','$rootScope', 'TableService', '$modal',
        function ($scope,$rootScope, TableService, $modal) {

            console.log('controller 1');
            $scope.items = TableService.userTableInfo.infoTab();

            var items;
            $scope.new = {
                'name': '',
                'age': ''
            };

            $scope.eEdit = function (item) {

                var modalInstance = $modal.open({
                    templateUrl: 'editModalContent.html',
                    controller: 'editModalInstanceCtrl',
                    resolve: {
                        item: function () {
                            return item;
                        }
                    }
                })
            };

            $scope.eDelete = function (item) {

                var modalInstance = $modal.open({
                    templateUrl: 'addDel.html',
                    controller: 'delModelInstanceCtrl'
                })
            };

            $scope.newUser = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'addNewUser.html',
                    controller: 'nUserModalInstanceCtr'
                });
            };
        }
    ])

    .controller('editModalInstanceCtrl', function ($scope, $modalInstance, item) {
        $scope.item = item;
        $scope.temp = {id: item.id, name: item.name, age: item.age};
        $scope.eEditEnd = function (temp, item) {
            console.log(temp, item);
            console.log($scope.temp);
            console.log('ng-click = edit');

            $modalInstance.close();
        };
        $scope.cancel = function () {
            console.log('ng-click = cancel');
            $modalInstance.dismiss('cancel');
        };

    })
    .controller('delModelInstanceCtrl', function ($scope, $modalInstance) {
        $scope.eDeleteEnd = function () {
            console.log('ng-click = delete');
            $modalInstance.close();
        };
        $scope.cancel = function () {
            

            console.log('ng-click = cancel');
            $modalInstance.dismiss('cancel');
        };
    })
    .controller('nUserModalInstanceCtr', function ($scope, TableService,$modalInstance) {
        $scope.eAddEnd = function () {
            TableService.userTableAdd.addUserTable({userName: $scope.item.name, userAge:$scope.item.age});
            $scope.items = TableService.userTableInfo.infoTab();
            console.log('ng-click = new user');
            console.log($scope.item,name, $scope.item.age);
            $modalInstance.close();
        };
        $scope.cancel = function () {
            console.log('ng-click = cancel');
            $modalInstance.dismiss('cancel');
        };
    });
//angular.module('prApp')
//    .controller('tableCtrl', ['$scope', '$modal','TableService',
//    function($scope,TableService, $modal){
//        $scope.item = TableService.query();
//        console.log(item);


//$scope.eEdit = function (item) {
//    var modalInstance = $modal.open({
//        templateUrl: 'editModalContent.html',
//        controller: 'editModalInstanceCtrl',
//        resolve: {
//            item: function () {
//                return item;
//            }
//        }
//    });
//};
//$scope.eDelete = function (item) {
//
//    var modalInstance = $modal.open({
//        templateUrl: 'addDel.html',
//        controller: 'delModelInstanceCtrl'
//    });
//
//
//};
//$scope.newUser = function () {
//    var modalInstance = $modal.open({
//        templateUrl: 'addNewUser.html',
//        controller: 'nUserModalInstanceCtr'
//    });
//};
//
//}
//])
//    .controller('delModelInstanceCtrl', function ($scope,UserFactory,UsersFactory, $modalInstance) {
//
//    $scope.eDeleteEnd = function (userId) {
//        UserFactory.delete({id: userId});
//        $scope.users = UsersFactory.query();
//        $modalInstance.close();
//    };
//    $scope.cancel = function () {
//        $modalInstance.dismiss('cancel');
//    };
//})
//
//
//.controller('editModalInstanceCtrl', function ($scope, $modalInstance,item) {
//    $scope.item = item;
//
//    $scope.eEditEnd = function () {
//        $modalInstance.close();
//    };
//    $scope.cancel = function () {
//        $modalInstance.dismiss('cancel');
//    };
//
//})
//.controller('nUserModalInstanceCtr', function ($scope, $modalInstance) {
//
//
//    $scope.eAddEnd = function () {
//        $modalInstance.close();
//    };
//    $scope.cancel = function () {
//        $modalInstance.dismiss('cancel');
//    };
//});
//
//
//
//
//'use strict';
//
//angular.module('prApp')
//    .controller('tableCtrl', ['$scope', '$http','$modal',  function ($scope, $http,$modal) {
//        $http.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
//        $http.defaults.headers.common['Accept'] = 'application/json; charset=utf-8';
//
//        $http.get('/show')
//            .success(function(data){
//
//                $scope.items = data;
//                console.log('success');
//            })
//            .error(function(data){
//               console.log('error')
//            });
//        $scope.eEdit = function (item) {
//
//            var modalInstance = $modal.open({
//                templateUrl: 'editModalContent.html',
//                controller: 'editModalInstanceCtrl',
//                resolve: {
//                    item: function () {
//                        return item;
//                    }
//                }
//            });
//        };
//        $http.delete({
//            url: '/web/app_dev.php/delete',
//            method: 'DELETE',
//            data: { 'userId' : id},
//            success: function (result) {
//                if (result.result === true) {
//                    console.log('delete');
//
//                }
//            }
//        } );
//        $scope.eDelete = function (item) {
//
//            var modalInstance = $modal.open({
//                templateUrl: 'addDel.html',
//                controller: 'delModelInstanceCtrl'
//            });
//            modalInstance.result.then(function(){
//               reallyDelete(item);
//            });
//
//        };
//        var reallyDelete = function (item) {
//            $scope.items = window._remove($scope.items, function(elem){
//                return elem != item;
//            });
//        };
//        $scope.newUser = function () {
//            var modalInstance = $modal.open({
//                templateUrl: 'addNewUser.html',
//                controller: 'nUserModalInstanceCtr'
//            });
//            modalInstance.result.then(function(item){
//                reallyDelete(item);
//                $scope.item.push(item);
//                console.log($scope.items);
//            })
//        };
//
//    }
//    ])
//    .controller('editModalInstanceCtrl', function ($scope, $modalInstance,item) {
//        $scope.item = item;
//
//        $scope.eEditEnd = function () {
//            $modalInstance.close();
//        };
//        $scope.cancel = function () {
//            $modalInstance.dismiss('cancel');
//        };
//    })
//    .controller('delModelInstanceCtrl', function ($scope, $modalInstance) {
//
//        $scope.eDeleteEnd = function () {
//            $modalInstance.close();
//        };
//        $scope.cancel = function () {
//            $modalInstance.dismiss('cancel');
//        };
//    })
//    .controller('nUserModalInstanceCtr', function ($scope, $modalInstance) {
//
//
//        $scope.eAddEnd = function () {
//            $modalInstance.close();
//        };
//        $scope.cancel = function () {
//            $modalInstance.dismiss('cancel');
//        };
//    });
//