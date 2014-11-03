angular.module( 'ngStudy.helloWorld', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'helloWorld', {
    url: '/helloWorld',
    views: {
      "main": {
        controller: 'HelloWorldCtrl',
        templateUrl: 'helloWorld/helloWorld.tpl.html'
      }
    },
    data:{ pageTitle: 'HelloWorld' }
  });
})

.controller( 'HelloWorldCtrl', function HelloWorldCtrl( $scope ) {
  $scope.greeting = {text:'Hello'};
})
;

