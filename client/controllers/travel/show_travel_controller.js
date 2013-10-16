window.ShowTravelController = RouteController.extend({
	data: function() {
		return Schema.TravelRequests.findOne(this.params._id);
	}
});