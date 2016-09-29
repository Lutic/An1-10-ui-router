(function() {

	angular
		.module("tasks")
		.controller("taskList", taskList);

	taskList.$inject = ["tasksSrv"];
	
	function taskList(tasksSrv) {
		var $ctrl = this;

		init();

		function init() {
			$ctrl.tasks = tasksSrv.getAllTasks();
		}
	}

})();