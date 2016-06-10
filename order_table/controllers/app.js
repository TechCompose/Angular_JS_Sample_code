var app = angular.module('myApp', ['toaster','ngAnimate', 'ui.bootstrap', 'ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/index");
  // Now set up the states
  $stateProvider
    .state('default', {
      templateUrl: 'home.html',
      url:''
    })
    .state('home_1', {
      url: "/home",
      templateUrl: "home.html"
    })
    .state('order_2', {
      url: "/order",
      templateUrl: "order_table.html"
    })
    .state('about_3', {
      url: "/about",
      templateUrl: "about_us.html"
    })
    .state('contact_4', {
      url: "/contact",
      templateUrl: "contact_us.html"
    })
    .state('service_5', {
      url: "/service",
      templateUrl: "service_info.html"
    })
});
