(function() {

	angular
		.module("tasks")
		.controller("addTask", addTask);

	addTask.$inject = ["usersSrv", "tasksSrv"];
	
	function addTask(usersSrv, taskSrv) {
		var $ctrl = this;
		
		init();

		function init() {
			$ctrl.addNewTask = addNewTask;
			usersSrv.getData().then( (data) => {
				$ctrl.users = data;
			});
		}

		function addNewTask(taskToAdd) {
			taskSrv.add(taskToAdd);
			taskToAdd.action = "";
			taskToAdd.user = "";
		}
	}

})();