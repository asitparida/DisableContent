angular.module('sampleApp', ['utility.disableElement'])
.controller('sampleCtrl', ["$scope", function ($scope) {
    var self = this;
    self.disable = false
    self.click = function (id) {
        self.disable = !self.disable;
    }
    self.clickdisabled = false;
    self.consolelog = function () {
        console.log(self);
    }
    self.toggleButtonDisabledState = function () {
        self.clickdisabled = !self.clickdisabled;
    }
}]);