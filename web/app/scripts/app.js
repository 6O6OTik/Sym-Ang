'use strict';


angular
    .module('prApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.bootstrap',
        'ngTouch',
        'LocalStorageModule'
    ])
    .config(function ($routeProvider, $locationProvider)  {

        $routeProvider

            .when('/home', {
                templateUrl: 'app/views/home.html'
            })
            .when('/login', {
                templateUrl: 'app/views/login.html',
                controller: 'loginCtrl'
            })

            .when('/registration', {
                templateUrl: 'app/views/registration.html',
                controller: 'registrationCtrl'
            })

            .when('/tableInfo', {
                templateUrl: 'app/views/tableInfo.html',
                controller: 'tableCtrl'
            })
            .when('/user', {
                templateUrl: 'app/views/user.html',
                controller: 'usersCtrl'
            })


            .otherwise({
                redirectTo: '/home'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        //$locationProvider.hashPrefix('!');
    });
    //.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    //    localStorageServiceProvider.setPrefix('prApp');
    //}]);
    //.run(['$rootScope', '$location', '$cookieStore', '$http',
    //    function ($rootScope, $location, $cookieStore, $http) {
    //                 $rootScope.window = $cookieStore.get('window') || {};
    //        if ($rootScope.window.currentUser) {
    //            $http.defaults.headers.common['prApp'] = 'Basic ' + $rootScope.window.currentUser.authdata;
    //        }

    //        $rootScope.$on('$locationChangeStart', function (event, next, current) {
    //             redirect to login page if not logged in
                //if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                //    $location.path('/login');
                //}
            //});
//     }]);

