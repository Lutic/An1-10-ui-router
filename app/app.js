(function() {
	"use strict";

	angular.module("app", [
		
		// features
		"tasks",
		"users",
		"userTasks"
	]);

	angular.element(document).ready(() => {
		angular.bootstrap(document, ["app"]);
	});

})();