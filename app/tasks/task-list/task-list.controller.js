(function() {

	angular
		.module("tasks")
		.controller("TaskList", TaskList);

	TaskList.$inject = ["tasksSrv"];
	
	function TaskList(tasksSrv) {
		let $ctrl = this;

		init();

		function init() {
			$ctrl.tasks = tasksSrv.getAllTasks()
		}
	}

})();