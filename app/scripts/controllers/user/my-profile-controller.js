angular.module('mapApp').controller('myProfileController', function(facebookService) {

	var self = this;

	self.getMyLastName = function() {
		   facebookService.getMyLastName() 
		     .then(function(response) {
		       console.log(response.last_name);
		     }
		   );
		};
});