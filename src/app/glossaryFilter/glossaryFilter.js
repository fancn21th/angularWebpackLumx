import './glossaryFilter.scss';
import angular from 'angular';

class glossaryFilter{
    constructor(){
        var vm = this;
    }
}

export default angular.module('glossary.glossaryFilter', [])
    .config(function ($stateProvider) {
        $stateProvider.state('glossary.glossaryFilter', {
            url: '/glossaryFilter',
            template: require('./glossaryFilter.html'),
            controller: glossaryFilter,
            controllerAs: "vm"
        });
    })
    .name;