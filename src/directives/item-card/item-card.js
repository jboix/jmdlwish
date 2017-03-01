angular.module('jmdlwish').directive('itemCard', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            location: '@',
            image: '@',
            price: '@',
            link: '@',
            notes: '@'
        },
        templateUrl: 'src/directives/item-card/item-card.html'
    };
});
