app.controller('seachCtrl',function($scope,$http){
	$scope.info={
		adds:''
	}
	$scope.addres=''
	$scope.gets=function(){
		$http.get('https://maps.googleapis.com/maps/api/geocode/json',{
			params:{
				address:$scope.info.adds
			}
		}).then(function(res){
//			console.log(res.data.results)
			$scope.addres=res.data.results
		}).catch(function(err){
			console.log("获取失败")
		})
		
	}
	
	
})