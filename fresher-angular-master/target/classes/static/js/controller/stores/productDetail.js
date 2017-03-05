var app = angular.module('myApp');


app.controller('productDetail',['$scope','$http','$routeParams',function($scope, $http, $routeParams){

	function getId(x){
		$http({
			method: 'get',
			url: "http://localhost:9000/fresherangular/product/get/"+ x
		}).success(function(data, status, headers, config){
			$scope.product = data;
		})
		.error(function(data, status, headers, config){});
	}
	getId($routeParams.productId);
}]);

app.directive('myTitle',function(){
	return{
		restrict:'E',
		templateUrl:'/fresherangular/views/stores/titleProduct.html'
	};
});