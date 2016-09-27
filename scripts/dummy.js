var app = angular.module('pdr',["ngRoute"]);


//route configuration

app.config(function($routeProvider)
{
	$routeProvider
	.when("/",
	{
		templateUrl:'index.html',
		
	})
	.when("/about",
	{
		templateUrl:'about.html',
		
	});
	
	$locationProvider.html5Mode({
	enabled: true});
	

});





// controller

app.controller('OrderFormController',function($scope,$timeout){
	
	
	
	$scope.IsVisible = false;
	$scope.IsSet = false;
	
	// diamond effect
	
            $scope.ShowHide = function () {
				$scope.activeSkills=[];
				
                $scope.result="";
                $scope.IsVisible = $scope.IsVisible ? false : true;
				$timeout(callAtTimeout, 1000);
				
            };
			
			
			
			//companies model

	$scope.companies=[
		
		{
			name:"TCS"
		},
		{
			name:"Wipro"
		},
		{
			name:"Amazon"
		},
		{
			name:"Google"
		}
		
	];


	//skills model
	
	
	$scope.services = [
		{
			name: 'Aptitude',
			price: 300,
			active:false
		},{
			name: 'Technical',
			price: 400,
			active:false
		},{
			name: 'Communication',
			price: 250,
			active:false
		}
	];
	
	
	
	// toggle active classes in the views
	
		$scope.toggleActive = function(s){
		s.active = !s.active;
	};
	
	
	
	
	// array to store selected skills by the users
	
	$scope.activeSkills=[];
	
	
	// callback for diamond effect
	
	function callAtTimeout() {
		
    $scope.IsVisible=false;
	$scope.IsSet=true;
	 angular.forEach($scope.services, function(filterObj , filterIndex) {
		 
		 if(filterObj.active==true)
		  $scope.activeSkills.push(filterObj.name);
		 
        }) 
		
		var status=false;
		angular.forEach($scope.activeSkills, function(filterObj , filterIndex) {
			if(!status)
			{
				
				
			if(filterObj=="Technical"&&$scope.selectedValue=="TCS" || filterObj=="Technical"&&$scope.selectedValue=="Wipro")
			{
				$scope.result="reject";
				status=true;
			
			}
		
			else
			{
				$scope.result="select";
			}
			}
			
		})
		
		
	
}



	
	// clear slected skills by user when clear button is clicked 
	
	$scope.clear=function() {
    angular.forEach($scope.services, function(filterObj , filterIndex) {
        
            filterObj.active=false;
			
    })
};


		 
 
		
	
});

