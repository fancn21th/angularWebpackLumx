require('./index.scss');
require('../vendor/vendor')();

const MODULE_NAME = 'app',
    idxRouter = require('./index.router').default,
    glossaryFilter = require('./glossaryFilter/glossaryFilter').default;;

var libs = [
    require("../vendor/lumx"),
    require('angular-ui-router'),
    require('../components/test/test').default,
    require('../components/test2/test2').default,
    glossaryFilter
];

angular.module(MODULE_NAME, libs)
    //TODO: Remove the run method below in production mode
    .run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })
    .config(idxRouter);