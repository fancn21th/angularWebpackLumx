import './glossaryFilter.scss';
import angular from 'angular';
var glossaryTable = require('./glossaryTable/glossaryTable').default;

console.log(glossaryTable);

class glossaryFilter{
    constructor(){
        var vm = this;
    }
}

let libs = [
    glossaryTable
];

export default angular.module('glossary.glossaryFilter', libs)
    .config(function ($stateProvider) {
        $stateProvider.state('glossary.glossaryFilter', {
            url: '/glossaryFilter',
            template: require('./glossaryFilter.html'),
            controller: glossaryFilter,
            controllerAs: "vm"
        });
    })
    .name;