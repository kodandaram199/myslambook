var app = angular.module('pdr',["ngRoute"]);


//route configuration

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html"
    })
	.when("/about",
	{
		templateUrl : "templates/about.html"
	})
	.when("/slam",
	{
		tempalteUrl: "templates/slam.html"
	});
    
});



app.controller("imageController",function($scope,$location,$window)
{
	$scope.imageGallery=[
	
	{
		name:'blue1',
		url:'images/red1.jpg'
	},
	{
		name:'black1',
		url:'images/pink1.jpg'
	},
	{
		name:'pink2',
		url:'images/pink2.jpg'
	},
	{
		name:'black1',
		url:'images/black1.jpg'
	},
	{
		name:'blue1',
		url:'images/blue1.jpg'
	},
	{
		name:'blue2',
		url:'images/blue2.jpg'
	},
	{
		name:'blue3',
		url:'images/blue3.jpg'
	}
	
	];
	
	 
	
	$scope.setback=function(url)
	{
		$scope.imageurl=url;
		$location.path('/slam');
		console.log($location.path());
    };
		
	
	
});