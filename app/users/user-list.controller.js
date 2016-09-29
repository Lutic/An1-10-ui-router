(function() {

	angular
		.module("users")
		.controller("userList", userList);

	userList.$inject = ["usersSrv"];

	function userList(usersSrv) {
		var $ctrl = this;
		
		init();

		function init() {
			usersSrv.getData().then(function(data) {
				$ctrl.users = data;
			});
		}
	}

})();