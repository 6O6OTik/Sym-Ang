'use strict';


angular
    .module('prApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.bootstrap',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider

            .when('/home', {
                templateUrl: 'bundles/app/views/home.html'
            })
            .when('/login', {
                templateUrl: 'bundles/app/views/login.html',
                controller: 'loginCtrl'
            })

            .when('/registration', {
                templateUrl: 'bundles/app/views/registration.html',
                controller: 'registrationCtrl'
            })
            //.when('/reg', {
            //    templateUrl: 'bundles/app/views/reg.html'
            //    //controller: 'RegistrationController'
            //})
            .when('/tableInfo', {
                templateUrl: 'bundles/app/views/tableInfo.html',
                controller: 'tableCtrl'
            })
            .when('/user', {
                templateUrl: 'bundles/app/views/user.html',
                controller: 'usersCtrl'
            })


            .otherwise({
                redirectTo: '/home'
            });

    });
