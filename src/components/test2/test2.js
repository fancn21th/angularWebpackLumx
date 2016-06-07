import './test2.scss';
import angular from 'angular';

class test2Ctrl{
    constructor(){
        var test = this;

        test.user = {};
        //////////////
        test.user.name = 'alex2';

        console.log(test);
    }
}

let libs = [
];

export default angular.module('glossary.components.test2', libs)
    .directive('test2', function () {
        return {
            restrict: 'E',
            scope:true,
            controller: test2Ctrl,
            controllerAs: 'test',
            template: require('./test2.html')
        };
    })
    .name;