var rpgApp = angular.module('rpgApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module ERROR!!!!
rpgApp.controller('AvatarController', function AvatarController($scope) {
	$scope.hi = "hi!";
	$scope.avatars = [
		{
			src: "../image/drakon.jpg",
			name: 'Nexus S', 
//asdf sadf 
			desc: 'Fast just got faster with Nexus S.'
		}, {
			src: "../image/elf.jpg",
			name: 'Motorola XOOM™ with Wi-Fi',
			desc: 'The Next, Next Generation tablet.'
		}, {
			src: "../image/gnom.jpg",
			name: 'MOTOROLA XOOM™',
			desc: 'The Next, Next Generation tablet.'
		} , {
			src: "../image/gnom.jpg",
			name: 'MOTOROLA XOOM™',
			desc: 'The Next, Next Generation tablet.'
		}
	];
});









	
	
	
	
	