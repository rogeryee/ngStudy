angular.module('ngStudy.directiveSample', [
    'ui.router'
  ])

  .config(function config($stateProvider) {
    $stateProvider.state('directiveSample', {
      url: '/directiveSample',
      views: {
        "main": {
          controller: 'DirectiveSampleCtrl',
          templateUrl: 'directiveSample/directiveSample.tpl.html'
        }
      },
      data: { pageTitle: 'DirectiveSample' }
    });
  })

  .controller('DirectiveSampleCtrl', ['$scope', function ($scope) {

    // 1. Matching Directive
    $scope.name = "What's your name?";

    // 2. Template/TemplateUrl
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])

  .directive('myCustomer', function () {
    return {
      template: 'Use template - Name: {{customer.name}} Address: {{customer.address}}'
    };
  })
  .directive('myCustomerUrl', function () {
    return {
      templateUrl: 'directiveSample/customer-template-url.tpl.html'
    };
  })
  .directive('myCustomerUrl2', function () {
    return {
      //templateUrl can also be a function which returns the URL of an HTML template to be loaded and used for the directive.
      // Angular will call the templateUrl function with two parameters: the element that the directive was called on,
      // and an attr object associated with that element.
      templateUrl: function(elem, attr){

        // associate with the attribute 'mysuffix' of div element
        console.log(attr.mysuffix);
        return 'directiveSample/customer-template-'+attr.mysuffix+'.tpl.html';
      }
    };
  })
;
