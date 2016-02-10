/**
 *
 */

angular.module( 'knorm.catalog', [
    'knorm.catalog.item',
    'ui.router'
])

    .config(function config( $stateProvider ) {
      $stateProvider.state( 'catalog', {
        url: '/catalog',
        views: {
          "main": {
            controller: 'CatalogCtrl',
            templateUrl: 'catalog/catalog.tpl.html'
          }
        },
        data:{ pageTitle: 'Catalog' }
      });
    })
    
    /**
     * And of course we define a controller for our route.
     */
    .controller( 'CatalogCtrl', function CatalogController( $scope ) {
    })
    
    ;

