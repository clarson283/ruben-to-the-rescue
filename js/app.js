(function () {

	var app = angular.module('rescuePage', []);
	
		app.controller("PanelController", function () {
			this.tab = 1;

			this.selectTab = function (setTab) {
				this.tab = setTab;
			};

			this.isSelected = function (checkTab) {
				return this.tab === checkTab;
			};

		});

		app.controller('formController', function ($scope, $http) {
			$scope.formData = {};
			$scope.submit = function () {
				$http({
					method: 'POST',
					url: 'mail.php',
					data: $.param($scope.formData),
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				})
				.success(function(data) {
					console.log(data);

					if (!data.success) {
						$scope.errorName = data.errors.name;
						$scope.errorEmail = data.errors.email;
					} else {
						$scope.message = data.message;
					}
				});
			}
		});

		app.controller("CommentController", function ($scope) {
			/*
			this.comment = {};

			this.addComment = function() {
				commentCtrl.comment.push(this.comment)
				this.comment = {};
			};
*/

			//$scope is parameter of function
			$scope.comment = [];
			$scope.btn_add = function() {
				if($scope.commentCtrl.comment.body != '') {
					alert('yes');
					$scope.comment.push($scope.commentCtrl.comment.body);
					$scope.commentCtrl.comment.body = '';//deletes both comment and textarea
					$scope.commentCtrl.comment.author = '';
				} else {
					alert('no');
				}
			}

			$scope.remItem = function($index) {
				$scope.comment.splice($index, 1);
			}

		});

})();