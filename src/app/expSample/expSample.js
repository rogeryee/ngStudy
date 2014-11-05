angular.module('ngStudy.expSample', [
    'ui.router'
  ])

  .config(function config($stateProvider) {
    $stateProvider.state('expSample', {
      url: '/expSample',
      views: {
        "main": {
          controller: 'ExpSampleCtrl',
          templateUrl: 'expSample/expSample.tpl.html'
        }
      },
      data: { pageTitle: 'ExpSample' }
    });
  })

  .controller('ExpSampleCtrl', ['$scope', function($scope) {

    // 1. First Sample
    var exprs = $scope.exprs = [];
    $scope.expr = '3*10|currency'; // default value
    $scope.addExp = function(expr) {
      exprs.push(expr);
    };

    $scope.removeExp = function(index) {
      exprs.splice(index, 1);
    };

    // 2. One-time Binding
    var counter = 0;
    var names = ['Igor', 'Misko', 'Chirayu', 'Lucas'];

    $scope.clickMe = function(clickEvent) {
      $scope.name = names[counter % names.length];
      counter++;
    };
  }])
;
