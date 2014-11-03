angular.module('ngStudy.serviceSample', [
    'ui.router'
  ])

  .config(function config($stateProvider) {
    $stateProvider.state('serviceSample', {
      url: '/serviceSample',
      views: {
        "main": {
          controller: 'ServiceSampleCtrl',
          templateUrl: 'serviceSample/serviceSample.tpl.html'
        }
      },
      data: { pageTitle: 'ServiceSample' }
    });
  })

  .factory('ngStudy.serviceSample.mathService', function () {

    var mathService = {
      add: function (a, b) {
        return a + b;
      },

      subtract: function (a, b) {
        return a - b;
      },

      multiply: function (a, b) {
        return a * b;
      },

      divide: function (a, b) {
        return a / b;
      }
    };
    return mathService;
  })
  .factory('ngStudy.serviceSample.calcService', ['ngStudy.serviceSample.mathService', function (mathService) {
    var calcService = {
      square: function (a) {
        return mathService.multiply(a, a);
      },

      cube: function (a) {
        return mathService.multiply(a, mathService.multiply(a, a));
      }
    };

    return calcService;
  }])

  .factory('ngStudy.serviceSample.contactService', function () {
    var contactService = {
      init: function () {
        this.uid = 1;
        this.contacts = [
          {
            id: 0,
            'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
          }
        ];
      },

      list: function () {
        return this.contacts;
      },

      save: function (contact) {
        if (contact.id == null) {
          //if this is new contact, add it in contacts array
          contact.id = this.uid++;
          this.contacts.push(contact);
        }
        else {
          //for existing contact, find this contact using id and update it.
          angular.forEach(this.contacts, function (c) {
            if (c.id == contact.id) {
              c = contact;
            }
          });
        }
      },

      get: function (id) {
        var contact;
        angular.forEach(this.contacts, function (c) {
          if (c.id == id) {
            contact = c;
          }
        });
        return contact;
      },

      del: function (id) {
        var _this = this;
        var i = 0;
        angular.forEach(this.contacts, function (contact) {
          if (contact.id == id) {
            _this.contacts.splice(i, 1);
          }
          i++;
        });
      }
    };

    return contactService;
  })

  .controller('ServiceSampleCtrl', ['$scope', 'ngStudy.serviceSample.calcService', 'ngStudy.serviceSample.contactService',
    function ServiceSampleCtrl($scope, calcService, contactService) {

      // 1. MathService
      $scope.doSquare = function () {
        $scope.answer = calcService.square($scope.number);
      };

      $scope.doCube = function () {
        $scope.answer = calcService.cube($scope.number);
      };

      // 2. ContactService
      contactService.init();
      $scope.contacts = contactService.list();

      $scope.saveContact = function () {
        contactService.save($scope.newcontact);
        $scope.newcontact = {};
      };

      $scope.del = function (id) {
        contactService.del(id);
        if ($scope.newcontact !== undefined && $scope.newcontact.id == id) {
          $scope.newcontact = {};
        }
      };

      $scope.edit = function (id) {
        var old = contactService.get(id);
        var cloned = angular.copy(old);
        $scope.newcontact = cloned;
      };
    }])
;
