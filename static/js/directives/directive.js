'use strict';

angular
    .module('sumologic')
    .directive('team',function(){
        return {
            restrict: "AE",
            templateUrl: 'static/templates/dialogs/teamdialog.html'
        }
    });
    
