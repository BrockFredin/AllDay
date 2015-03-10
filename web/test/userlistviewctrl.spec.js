/**
 * Created by brock.fredin on 3/5/15.
 */
'use strict';

describe('UserListViewCtrl', function () {
    var scope;//we'll use this scope in our tests

    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('Allday'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('UserListViewCtrl', {$scope: scope});
    }));

    // tests start here
    it('UserListViewCtrl should have scope user with type string', function () {
        expect(scope.users[0].name).toEqual(jasmine.any(String))
    });
    it('UserListViewCtrl should have scope user with first name hip', function () {
        expect(scope.users[1].name).toEqual(jasmine.any(String))
    });
    it("UserListViewCtrl should have an age set to int", function () {
        expect(scope.users[0].age).toEqual(jasmine.any(Number))
    });
    it("UserListViewCtrl should have a second age set to int", function () {
        expect(scope.users[1].age).toEqual(jasmine.any(Number))
    });
    it("UserListViewCtrl should be of type object", function () {
        expect(scope.users).toEqual(jasmine.any(Object));
    });
});