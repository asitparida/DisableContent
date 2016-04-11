angular.module('sampleApp', ['utility.disableContent'])
.controller('sampleCtrl', ["$scope", function ($scope) {
    var self = this;
    self.disable = false
    self.click = function (id) {
        self.disable = !self.disable;
    }
}]);