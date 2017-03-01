angular.module('jmdlwish').directive('navHeader', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            username: '@'
        },
        templateUrl: 'src/directives/nav-header/nav-header.html',
        link: function(scope) {

        }
    };
});
