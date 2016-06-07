import './addGlossaryItem.scss';
import angular from 'angular';

let DIALOGID = 'addGlossaryItem';

class addGlossaryItem{
    constructor($scope, LxDialogService, LxNotificationService,$timeout){
        var vm = this;

        vm.addglossaryItem = addglossaryItem;
        vm.openDialog = openDialog;
        vm.dialogID = DIALOGID;

        vm.glossaryItem = {
            title: '文本框'
        };

        ////////////

        function addglossaryItem(){

        }

        function openDialog()
        {
            LxDialogService.open(vm.dialogID);
        }

        $timeout(openDialog, 500);
    }
}

export default angular.module('glossary.glossaryFilter.glossaryTable.addGlossaryItem', [])
    .config(function ($stateProvider) {
        $stateProvider.state('glossary.glossaryFilter.glossaryTable.addGlossaryItem', {
            url: '/addGlossaryItem',
            template: require('./addGlossaryItem.html'),
            controller: addGlossaryItem,
            controllerAs: "vm"
        });
    })
    .name;