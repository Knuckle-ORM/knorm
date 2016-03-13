/**
 *
 */

angular.module( 'knorm.knorm', [
    'knorm.knorm.items',
    'knorm.konrm.item',
])

    .config(function config( $stateProvider ) {

        $stateProvider.state( 'knorm', {
            abstract:true
        });

        $stateProvider.state( 'knorm.items', {
            url: '/knorm/items',
            views: {
                "main@": {
                    controller: 'knormItemsCtrl as Ctrl',
                    templateUrl: 'knorm/items/items.tpl.html'
                }
            },
            data:{ pageTitle: 'Knorm' },
            resolve: {
                normRestService: 'knormRestService',
                normData: function(knormRestService, $stateParams){

                    var filters = {};
                    filters.state = 1;

                    var limit = {};
                    limit.limit = 20;
                    limit.offset = 0;
                    var count = 1;
                    var paging = true;

                    filters = $stateParams.filters || {};

                    filters = angular.merge(filters,{order:{'created':'asc'}});

                    var knorm = knormRestService.get( { filters:filters, limit:limit, paging:paging, count:count } );

                    return knorm.$promise;
                }
            }
        });

        $stateProvider.state( 'knorm.item', {
            url: '/knorm/item/{id}',
            views: {
                "main@": {
                    controller: 'KnormItemCtrl as Ctrl',
                    templateUrl: 'knorm/item/item.tpl.html'
                }
            },
            data:{ pageTitle: 'Knorm Detail' },
            resolve:{
                normRestService: 'knormRestService',
                knormData: function($stateParams,knormRestService){

                    // Set up our resource calls
                    var account;

                    if(typeof $stateParams.id !== 'undefined' ){
                        knorm = knormRestService.get({id:$stateParams.id});
                    }else{
                        knorm  = knormRestService.get();
                    }

                    // Wait until all resources have resolved their promises, then return this promise
                    return knorm.$promise;
                }

            }
        });
    });
