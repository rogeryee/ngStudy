angular.module('ngStudy.chartiqSample', [
    'ui.router'
  ])

  .config(function config($stateProvider) {
    $stateProvider.state('chartiqSample', {
      url: '/chartiqSample',
      views: {
        "main": {
          controller: 'ChartIQSampleCtrl',
          templateUrl: 'chartiqSample/chartiqSample.tpl.html'
        }
      },
      data: { pageTitle: 'ChartIQ Sample' }
    });
  })

  .controller('ChartIQSampleCtrl', ['$scope',
    function ChartIQSampleCtrl($scope) {

      // 1. MathService
      $scope.title = "Hi Roger";
    }])
;
