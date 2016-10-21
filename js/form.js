var app=angular.module("my",[]);
app.controller("cro",function($scope){
	$scope.valid=function(){
	
		console.log($scope.myform.$valid);//是否通过验证
		if($scope.myform.$valid){
			$scope.info="全部数据验证通过";
			console.log($scope.sex);
			console.log($scope.check);
		}
	}
});