/*
------------------------------------------------------------------------------
				TASK MANAGER ANGULAR JS SCRIPT
------------------------------------------------------------------------------
*/

// creating the module
var myApp = 
angular
.module("taskModule", [])
.controller("taskController", function($scope) {	

	$scope.message = "Task Manager Demo By Singh";

	// some task objects
	$scope.tasks = [
		{ title: "Send email to John", completed: false},
		{ title: "Buy jeans on weekend", completed: false},
		];


	// function to add new task
	$scope.addTask = function() {
		$scope.tasks.push({ title: $scope.new_task, completed: false});
	}
});