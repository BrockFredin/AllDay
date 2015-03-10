/**
 * Created by brock.fredin on 3/5/15.
 */

angular.module('Allday', [])
    .controller('UserListViewCtrl', function ($scope) {
        $scope.users = [
            {"name": "Brock", "age": "31"},
            {"name": "Hipster", "age": 32}
        ];

        $scope.roles = [
            {"name": "one", "access": "all"},
            {"name": "two", "access": "medium"}
        ];
    })
;