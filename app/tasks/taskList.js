(function() {

	angular
		.module("tasks")
		.controller("taskList", taskList);

	taskList.$inject = ["tasksSrv"];
	
	function taskList(tasksSrv) {
		var vm = this;

		init();

		function init() {
			vm.tasks = tasksSrv.getAllTasks();
		}
	}

})();