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

		app.controller("CommentController", function () {
			this.comment = {};

			this.addComment = function() {
				comments.push(this.comment);
				this.comment = {};
			};
		});

})();