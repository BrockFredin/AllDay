/**
 * Created by brock.fredin on 3/5/15.
 */

angular.module('Allday', [])
    .controller('UserListViewCtrl', function ($scope) {
        $scope.users = [
            {"name": "Brock", "age": 31},
            {"name": "Hip", "age": 32}
        ];

        $scope.roles = [
            {"name": "one", "access": "All"},
            {"name": "two", "access": "medium"}
        ];
    })
;