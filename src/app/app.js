angular.module( 'ngStudy', [
  'templates-app',
  'templates-common',
  'ui.router',
  'ngStudy.about',
  'ngStudy.helloWorld',
  'ngStudy.formSample',
  'ngStudy.serviceSample',
  'ngStudy.expSample',
  'ngStudy.directiveSample',
  'ngStudy.chartiqSample',
  'ngStudy.header'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/about' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngStudy' ;
    }
  });
})

;

