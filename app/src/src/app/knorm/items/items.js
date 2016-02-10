/**
 *
 */


angular.module( 'knorm.knorm.items', [])
    .controller( 'KnormItemsCtrl', function KnormItemsController(
        $scope, $mdSidenav, $timeout, $log, $filter,
        knormData, knormRestService
    ) {
        this.items = knormData.items;
        this.total_items = knormData.count;

        this.pageSize = 20;
        this.currentPage = 1;
        this.filters = { state:1 };
        this.count = 0;

        this.columnOrder = {created:'asc'};
        this.columnSortState = {created:'arrow_drop_down'};
        this.filters = {order:this.columnOrder};

        $scope.$watch(
            angular.bind(this,
                function (currentPage) {
                    return this.currentPage;
                }
            ),
            angular.bind(this ,
                function(newVal,oldVal) {
                    if(newVal !== oldVal){
                        this.getPage(newVal);
                    }

                }
            )
        );

        $scope.$watch(
            angular.bind(this,
                function (filters) {
                    return this.filters;
                }
            ),
            angular.bind(this ,
                function(newVal,oldVal) {
                    if(newVal !== oldVal){

                        this.count = 1;//changing filters will change the number of results so get the count so that we can adjust the pagination
                        if(this.currentPage == 1)
                        {
                            //if its already one, just fire the getPage() function to get the new data
                            this.getPage();
                        }else{
                            //if we aren't on page 1, just change it and let the watcher fire the getPage() function.
                            this.currentPage = 1;
                        }

                    }

                }
            ),
            true//deep watch
        );

        this.changeOrder = function(column){
            if(typeof this.columnOrder[column] == 'undefined' ){
                this.columnOrder[column] = 'asc';
                this.columnSortState[column] = 'arrow_drop_up';
            }else if(this.columnOrder[column]=='asc'){
                this.columnOrder[column] ='desc';
                this.columnSortState[column] = 'arrow_drop_down';
            }else{
                delete this.columnOrder[column];
                this.columnSortState[column] = 'sort';
            }
            this.filters.order = this.columnOrder;
        };

        this.getPage = function(){

            var limit = {};

            limit.limit = this.pageSize;
            limit.offset = (this.currentPage-1) * this.pageSize;

            if(this.count){
                var result = knormRestService.get( { paging:true, filters:this.filters, limit:limit, count:this.count} );
            }else{
                var result = knormRestService.query( { paging:true, filters:this.filters, limit:limit, count:this.count}) ;
            }

            result.$promise.then(
                angular.bind(this,
                    function(){
                        if(this.count){
                            this.total_items = result.count;
                            this.items = result.items;
                            this.count = 0;
                        }else{
                            this.items = result;
                        }
                    }
                )
            );
        };


        /*
         *  Toggle Left Slidout Filterbar.
         */
        this.toggleLeft = buildDelayedToggler('left');
        this.isOpenLeft = function(){
            return $mdSidenav('left').isOpen();
        };

        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }
        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }

    })

    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    })
;