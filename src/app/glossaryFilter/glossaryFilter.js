import './glossaryFilter.scss';
import angular from 'angular';
var glossaryTable = require('./glossaryTable/glossaryTable').default;

console.log(glossaryTable);

class glossaryFilter{
    constructor(){
        var vm = this;
        vm.categories = [];
        vm.categories.push({
            title: '组件',
            description: '组件是应用业务的基础组成单元'
        });
        vm.categories.push({
            title: '组件',
            description: '组件是应用业务的基础组成单元'
        });
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