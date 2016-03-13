/**
 *
 */

angular.module( 'knorm.knorm.item', [])



    /**
     * And of course we define a controller for our route.
     */
    .controller( 'KnormItemCtrl', function KnormItemController(
        $scope, $stateParams,$filter, knormData, knormRestService
    ) {
        this.item = knormData;

        this.saveItem = function(){
            var item = knormRestService.save(this.item);
            item.$promise.then(angular.bind(this, function(){
               this.item = item;
            }));
        };
    })
    ;
    
