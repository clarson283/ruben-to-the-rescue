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
			//adding comment to the DOM
			$scope.comment = [];
			$scope.addComment = function() {
				if($scope.newComment.body != '') {
					alert('yes');
					$scope.comment.push($scope.newComment.body);
					$scope.comment.push($scope.newComment.author);
					console.log($scope.newComment.body);//prints to console fine
					console.log($scope.newComment.author);//prints to console fine
					$scope.newComment.body = '';//deletes both comment and textarea
					$scope.newComment.author = '';
				} else {
					alert('no');
				}
			}

			$scope.remItem = function($index) {
				$scope.comment.splice($index, 1);
			}

		});

})();