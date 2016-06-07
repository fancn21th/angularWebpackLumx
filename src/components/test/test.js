import './test.scss';
import angular from 'angular';

class testCtrl{
    constructor($scope){
        var test = this;

        //////////////

        console.log($scope.item);
    }
}

let libs = [
];

export default angular.module('glossary.components.test', libs)
    .directive('test', function () {
        return {
            restrict: 'E',
            scope: {
              item: '='
            },
            controller: testCtrl,
            controllerAs: 'test',
            template: require('./test.html')
        };
    })
    .name;