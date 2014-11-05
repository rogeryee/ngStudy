var INTEGER_REGEXP = /^\-?\d+$/;

angular.module('ngStudy.formSample', [
    'ui.router'
  ])

  .config(function config($stateProvider) {
    $stateProvider.state('formSample', {
      url: '/formSample',
      views: {
        "main": {
          controller: 'FormSampleCtrl',
          templateUrl: 'formSample/formSample.tpl.html'
        }
      },
      data: { pageTitle: 'FormSample' }
    });
  })

  .controller('FormSampleCtrl', function FormSampleCtrl($scope) {

    // 1. Shopping Cart
    $scope.items = [
      { title: 'Paint pots', quantity: 8, price: 3.95 },
      { title: 'Polka dots', quantity: 17, price: 12.95 },
      { title: 'Pebbles', quantity: 5, price: 6.95 }
    ];

    $scope.remove = function (index) {
      $scope.items.splice(index, 1);
    };

    $scope.bill = {};

    $scope.calcTotal = function (newValue, oldValue, scope) {
      var total = 0;
      for (var i = 0, len = scope.items.length; i < len; i++) {
        total = total + scope.items[i].price * scope.items[i].quantity;
      }

      scope.bill.total = total;
      scope.bill.discount = total > 100 ? 10 : 0;
      scope.bill.subtotal = total - scope.bill.discount;
    };

    $scope.$watch('items', $scope.calcTotal, true);

    // 2. StartUp
    $scope.funding = { startingEstimate: 0 };
    $scope.computeNeeded = function () {
      $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };

    $scope.requestFunding = function () {
      alert("Sorry, please get more customers first.");
    };

    $scope.reset = function () {
      $scope.funding.startingEstimate = 0;
    };

    $scope.$watch('funding.startingEstimate', $scope.computeNeeded);

    // 3. Student List
    var students = [
      { name: 'Mary Contrary', id: '1' },
      { name: 'Jack Sprat', id: '2' },
      { name: 'Jill Hill', id: '3' }
    ];

    $scope.students = students;
    $scope.insertTom = function () {
      $scope.students.splice(1, 0, { name: 'Tom Thumb', id: '4' });
    };

    $scope.menuState = { show: false };
    $scope.toggleMenu = function () {
      $scope.menuState.show = !$scope.menuState.show;
    };

    $scope.isDisabled = false;
    $scope.Disable = { text: 'Disable' };
    $scope.disableMenu = function () {
      $scope.isDisabled = !$scope.isDisabled;
      if ($scope.isDisabled) {
        $scope.Disable = { text: 'Enable' };
      }
      else {
        $scope.Disable = { text: 'Disable' };
      }
    };

    // 4. CSS Changes
    $scope.studyStyle = 'ngstudy-form-sample__';
    $scope.isError = false;
    $scope.isWarning = false;
    $scope.showError = function () {
      $scope.messageText = 'This is an error!';
      $scope.isError = true;
      $scope.isWarning = false;
    };

    $scope.showWarning = function () {
      $scope.messageText = 'Just a warning. Please carry on.';
      $scope.isWarning = true;
      $scope.isError = false;
    };

    // 5.Restaurant Table
    $scope.directory = [
      { name: 'The Handsome Heifer', cuisine: 'BBQ' },
      { name: "Green's Green Greens", cuisine: 'Salads' },
      { name: 'House of Fine Fish', cuisine: 'Seafood' }
    ];
    $scope.selectRestaurant = function (row) {
      $scope.selectedRow = row;
    };

    // 6. Custom Filter
    $scope.pageHeading = 'behold the majesty of your page title';

    // 7. Complete Form
    $scope.master = {};

    $scope.update = function (user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function () {
      $scope.user = angular.copy($scope.master);
    };

    $scope.isUnchanged = function (user) {
      return angular.equals(user, $scope.master);
    };

    $scope.reset();

    // 8. Custom Validation
  })

  .filter('titleCase', function () {
    var titleCaseFilter = function (input) {
      var words = input.split(' ');
      for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      return words.join(' ');
    };
    return titleCaseFilter;
  })


  .directive('integer', function () {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        ctrl.$validators.integer = function (modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }

          if (INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            return true;
          }

          // it is invalid
          return false;
        };
      }
    };
  })

  .directive('username', function ($q, $timeout) {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

        ctrl.$asyncValidators.username = function (modelValue, viewValue) {

          if (ctrl.$isEmpty(modelValue)) {
            // consider empty model valid
            return $q.when();
          }

          var def = $q.defer();

          $timeout(function () {
            // Mock a delayed response
            if (usernames.indexOf(modelValue) === -1) {
              // The username is available
              def.resolve();
            }
            else {
              def.reject();
            }

          }, 2000);

          return def.promise;
        };
      }
    };
  })

;
