/**
 *
 */

angular.module( 'knorm.catalog.item', [
  'ui.router'
])
    
    .config(function config( $stateProvider ) {
      $stateProvider.state( 'catalog.item', {
        url: '/item/{id}',
        views: {
          "main@": {
            controller: 'CatalogItemCtrl',
            templateUrl: 'catalog/item/item.tpl.html'
          }
        },
        data:{ pageTitle: 'Category Item' }
      });
    })
    
    /**
     * And of course we define a controller for our route.
     */
    .controller( 'CatalogItemCtrl', function CatalogItemController( $scope ) {
    })
    
    ;
    
