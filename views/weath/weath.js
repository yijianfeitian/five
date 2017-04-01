app.controller('weathCtrl',function($scope,$stateParams,$http,$ionicActionSheet,Location,$ionicModal){
	$scope.addres=$stateParams.titleId
	
//	console.log(Location)
//	$scope.weaths=""
	  $http.get("/api/"+$stateParams.messageId+','+$stateParams.nameId).then(function(res){  
            $scope.weaths=res.data
//          console.log(res)
      }).catch(function(err){
      	console.log("失败")
      })
      //获取顶部导航的高度
      var height = document.querySelector('.bar-dark').offsetHeight
//    console.log(height)
      //滚动视图的高
      $scope.getHeight=function(){
      	return parseInt(window.innerHeight - height) + 'px'
      }
      $ionicModal.fromTemplateUrl('views/weath/model.html',{
	   	scope:$scope
	  }).then(function(modal){
	   
	 	 $scope.modal=modal
	 	
//	   	console.log(modal)
	  })
      $scope.showAction = function(){
//    	console.log('准备上啦菜单')
      	$ionicActionSheet.show({
      		buttons:[
      			{text:'Toggle Locations'},
      			{text:'Set as primary'},
      			{text:'Sunset sunrise'}
      			
      		],
      		cancelText:"Cancels",
      		buttonClicked:function(index){
//    			console.log(index)
      			if( index == 0){
      				Location.toggle($stateParams)
      			}
      			if( index == 1){
      				Location.setPrimty($stateParams)
      			}
      			if( index ==2){
      				
      				$scope.modal.show()
      				
      			}
      			return true
      		}
      		
      	})
      }
})