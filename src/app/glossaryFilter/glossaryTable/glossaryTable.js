import './glossaryTable.scss';
import angular from 'angular';
var addGlossaryItem = require('./addGlossaryItem/addGlossaryItem').default;

class glossaryTable{
    constructor($state){
        var vm = this;
        vm.items = [];
        vm.update = update;

        ////////////////////////

        vm.items.push({
            title: '组件',
            description: '组件是应用业务的基础组成单元'
        });
        vm.items.push({
            title: '组件',
            description: '组件是应用业务的基础组成单元'
        });


        function update(categoryItem){
            $state.go('glossary.glossaryFilter.glossaryTable.addGlossaryItem');
        }
    }
}

var libs = [
    addGlossaryItem
];

export default angular.module('glossary.glossaryFilter.glossaryTable', libs)
    .config(function ($stateProvider) {
        $stateProvider.state('glossary.glossaryFilter.glossaryTable', {
            url: '/glossaryTable',
            template: require('./glossaryTable.html'),
            controller: glossaryTable,
            controllerAs: "vm"
        });
    })
    .name;