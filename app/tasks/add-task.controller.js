(function() {

	angular
		.module("tasks")
		.controller("AddTask", AddTask);

	AddTask.$inject = ["usersSrv", "tasksSrv"];
	
	function AddTask(usersSrv, taskSrv) {
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