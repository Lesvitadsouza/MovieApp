var app = angular.module('myApp', ["ngRoute"]);


app.controller('allMovie', function($scope, $http,$rootScope, $location) {  
	$http.get("http://localhost/Lesvita/js/movie_mock_data.php").then(function(response) {
	$scope.myData = response.data.movies;
	$rootScope.allData=response.data.movies;
	});


	$scope.gotoMovie = function(id){
		$rootScope.id=id;
		$rootScope.singleData=$rootScope.allData.find(function(val){return val.id==id});
		$location.path("/id/" + id);
	}
	
 
});
app.controller('singleMovie', function($scope,$rootScope, $http, $routeParams){
	var urllink="http://localhost/Lesvita/index.html#!/"+ $rootScope.id +"/";
	$scope.myId=$http.get(urllink).then(function(response){
		var myId=response;
	});
	});

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : "template/main.html",
		controller : "allMovie"
	})
	.when("/id/:ID", {
		templateUrl : "template/single.html",
		controller : "singleMovie"
	})
	.otherwise({ redirectTo : 'template/main.html'});
});