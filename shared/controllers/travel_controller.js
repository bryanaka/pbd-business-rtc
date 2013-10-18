this.TravelController = this.ApplicationController.extend({

  index: function() {
    this.renderTravel();
  },

  new: function() {
    this.renderTravel();
  },

  show: function() {
    this.data = TravelRequests.findOne(this.params._id);
    this.renderTravel();
  },

  edit: function() {
    this.data = TravelRequests.findOne(this.params._id);
    this.renderTravel();
  },

  renderTravel: function() {
    this.renderWithTopNav('travel_nav');
    this.render();
  }

});
