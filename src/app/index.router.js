export default function rootRouting($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('glossary', {
            url: '',
            abstract: true,
            template: `<div ui-view></div>`
        });
    $urlRouterProvider.otherwise('/glossaryFilter');
}