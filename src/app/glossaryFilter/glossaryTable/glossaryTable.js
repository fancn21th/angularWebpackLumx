import './glossaryTable.scss';
import angular from 'angular';

class glossaryTable{
    constructor(){
        var vm = this;
    }
}

export default angular.module('glossary.glossaryFilter.glossaryTable', [])
    .config(function ($stateProvider) {
        $stateProvider.state('glossary.glossaryFilter.glossaryTable', {
            url: '/glossaryTable',
            template: require('./glossaryTable.html'),
            controller: glossaryTable,
            controllerAs: "vm"
        });
    })
    .name;