(function() {

	angular
		.module("users")
		.controller("userList", userList);

	userList.$inject = ["usersSrv"];

	function userList(usersSrv) {
		var vm = this;
		
		init();

		function init() {
			usersSrv.getData().then(function(data) {
				vm.users = data;
			});
		}
	}

})();