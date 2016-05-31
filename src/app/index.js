require('./index.scss');
require('../core/vendor')();

angular.module('app', []).
    controller('greetingCtrl',function () {
        var vm = this,
            message = 'aloha hongtoo!';
        vm.greeting = `${message} and welcome`;
    });