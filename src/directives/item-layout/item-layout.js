angular.module('jmdlwish').directive('itemLayout', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {

        },
        templateUrl: 'src/directives/item-layout/item-layout.html'
    };
});
