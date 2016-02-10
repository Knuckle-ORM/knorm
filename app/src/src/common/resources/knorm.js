/**
 * Created by Ironman on 9/3/2015.
 */

angular.module( 'resources.knorm',['ngResource'] ).factory('knormRestService', function ($resource) {
    return $resource('/',
        {
            id: '@id',
            limit: '@limit',
            filters: '@filters',
            format:'json',
            option:'com_knorm',
            controller:'api.knorm'
        },
        {
            update:{
                method:'PUT'
            }
        }
    );
});