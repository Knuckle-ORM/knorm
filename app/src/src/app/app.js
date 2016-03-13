angular.module( 'knorm', [
    'templates-app',
    'templates-common',
    'knorm.knorm',
    'knorm.home',
    'angularUtils.directives.dirPagination',
    'resources.knorm',
    'knorm.filters',
    'rgkevin.datetimeRangePicker',
    'angular-loading-bar',
    'ngAnimate',
    'ngMaterial',
    'ngResource',
    'ui.router'
])

    .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $mdThemingProvider ) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey');

            $urlRouterProvider.otherwise( '/home' );
    })

    .run( function run (editableOptions,$rootScope, RouterTracker ) {
        editableOptions.theme = 'bs3';

    })

    .controller( 'AppCtrl', function AppCtrl ( $scope ) {
      $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
          $scope.pageTitle = toState.data.pageTitle + ' | Knorm' ;
        }
      });
    })

    ;

