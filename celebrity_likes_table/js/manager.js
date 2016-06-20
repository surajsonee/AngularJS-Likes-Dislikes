// creating the module, contoller etc.
var myApp = 
angular
.module("likesModule", [])
.controller("likesController", function($scope) {	

	// creating an object array of celebrities
	// FIXME: fetch data from database later...
	$scope.celebrities = [
		{ name: "Arnold Schwarzenegger", likes: 0, dislikes: 0 },
		{ name: "Sylvester Stallone", likes: 0, dislikes: 0 },
		{ name: "Hugh Jackman", likes: 0, dislikes: 0 },
		{ name: "Mel Gibson", likes: 0, dislikes: 0 },
		{ name: "Tom Cruise", likes: 0, dislikes: 0 },
		{ name: "Jennifer Lopez", likes: 0, dislikes: 0 },
		{ name: "Nicole Kidman", likes: 0, dislikes: 0 },
		{ name: "Amitab Bachan", likes: 0, dislikes: 0 },
		{ name: "Navjot Singh", likes: 0, dislikes: 0 },
		{ name: "Priyanka Chopra", likes: 0, dislikes: 0 },
		{ name: "Akshay Kumar", likes: 0, dislikes: 0 },
		];

	$scope.incLikes = function(celebrity) {
		celebrity.likes++;
	}

	$scope.incDislikes = function(celebrity) {
		celebrity.dislikes++;
	}

});