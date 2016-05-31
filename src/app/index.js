require('./index.scss');
require('../vendor/vendor')();

const MODULE_NAME = 'app';

var libs = [
    require("../vendor/lumx")
];

angular.module(MODULE_NAME, libs).
    controller('greetingCtrl',function () {
        var vm = this,
            message = 'aloha hongtoo!';
        vm.greeting = `${message} and welcome`;
    });