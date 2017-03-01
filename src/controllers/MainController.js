angular.module('jmdlwish').controller('MainController', function($scope, $http, $log) {
    $scope.username = "Jérôme";

    $http({
        method: 'GET',
        url: 'resources/data.json'
    }).then(function(response) {
        var data = response.data;
        if (data && data.items && data.items.length > 0) {
            $scope.items = data.items;
        } else {
            $scope.items = [];
        }
    }, function(response) {
        $log.error(response);
        $scope.items = [];
    });
});