angular.module('App', ['ui.bootstrap'])
	.controller('mainController', ['$scope', function($scope){
		
		$scope.myInterval = 3000
		$scope.slides = [
		    {
		      image: 'mockup/sliderImages/1.jpg'
		    },
		    {
		      image: 'mockup/sliderImages/2.jpg'
		    },
		    {
		      image: 'mockup/sliderImages/3.jpg'
		    },
		    {
		      image: 'mockup/sliderImages/4.jpg'
		    },
		    {
		      image: 'mockup/sliderImages/5.jpg'
		    },
		    {
		      image: 'mockup/sliderImages/6.jpg'
		    }
		]
}])