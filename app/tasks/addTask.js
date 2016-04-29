(function() {

	angular
		.module("tasks")
		.controller("addTask", addTask);

	addTask.$inject = ["usersSrv", "tasksSrv"];
	
	function addTask(usersSrv, taskSrv) {
		var vm = this;
		
		init();

		function init() {
			vm.addNewTask = addNewTask;
			usersSrv.getData().then(function(data) {
				vm.users = data;
			});
		}

		function addNewTask(taskToAdd) {
			taskSrv.add(taskToAdd);
			taskToAdd.action = "";
			taskToAdd.user = "";
		};
	}

})();