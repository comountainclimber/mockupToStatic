// angular.module('App', []);

// angular.module('App')

angular.module('App', ['ui.bootstrap'])
	.controller('mainController', ['$scope', function($scope){

		$scope.greeting = "hello world"


		$scope.myInterval = 3000;
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






		// $scope.myInterval = 5000;
  // 		$scope.noWrapSlides = false;
  // 		var slides = $scope.slides = ['/mockup/sliderImages/1.jpg', '/mockup/sliderImages/2.jpg','/mockup/sliderImages/3.jpg','/mockup/sliderImages/4.jpg','/mockup/sliderImages/5.jpg','/mockup/sliderImages/6.jpg',];





		}])