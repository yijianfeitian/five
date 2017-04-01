app.controller('mySeting',function($scope,Settings,Location){
//	console.log(Settings)
	$scope.settings = Settings
	$scope.isDone=false
	$scope.locations = Location.data
	console.log(Location.data[0])
	$scope.remove=function(location){
		Location.toggle(location)
	}
})