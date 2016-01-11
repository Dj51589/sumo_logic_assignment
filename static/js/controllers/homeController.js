'use strict';

angular
	.module('sumologic')
	.controller('homeController', HomeController);

	HomeController.$inject = ['$rootScope','$scope', '$mdDialog'];

    function HomeController ($rootScope, $scope, $mdDialog) 
    {
		$scope.openDialog = function($event)
		{
			$mdDialog.show({
				targetEvent: $event,
			 	clickOutsideToClose: true,
			 	templateUrl: 'team-dialog.tmpl.html',
		 		locals: {items: JSONData,myscope:$scope},
			 	onComplete: afterShowAnimation,
			 	controller: DialogController,
			 	bindToController:true,
			 	onComplete: function(x,y,z){
			 		var abc = x;
			 	}
			});
		};

		function afterShowAnimation(x,y,z){
			$scope.employee = [];
		};
	}

	function DialogController($scope, $mdDialog, $q, items, myscope) {
		$scope.items = items;
		$scope.mailchecked = true;
		$scope.employee = null;
		$scope.closeDialog = function() {
	  		myscope.team = $scope.teamname;
	  		myscope.employee = $scope.selectedItem;
	  		$mdDialog.hide();
		};
		$scope.allemployee = $scope.employee = [];
		var filteremployee = function(){
			var results = JSONData;
			var team = $scope.teamname;
			results = results.filter(function(element, index, array){
				return element.team.search(team) !== -1;
			});
			clearFields();
			$scope.allemployee = $scope.employee = results ? results[0].employees : null;
			$scope.querySearch();
		};

		var clearFields = function(){
			$scope.selectedItem = $scope.searchText = '';
		};

		$scope.querySearch = function(value){
			var results = $scope.allemployee;
			if(value){
				results = results.filter(function(element, index, array){
					return element.toLowerCase().search(value) !== -1;
				});
			}
			$scope.employee = results;
		};

		$scope.$watch('teamname',function(value){
			if(value){
				filteremployee();
			}
		});
	}

var JSONData = 
	[
		{
			team:'Engineering',
			employees:['LawanaFan','LarryRainer','RahulMalik','LeahShumway']
		}, 
		{
			team:'Executive',
			employees:['RohanGupta','RondaDean','RobbyMaharaj']
		}, 
		{
			team:'Finance',
			employees:['CalebBrown','CarolSmithson','CarlSorensen']
		}, 
		{
			team:'Sales',
			employees:['AnkitJain','AnjaliMaulingkar']
		}
	]



