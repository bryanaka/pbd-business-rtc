TravelController = ApplicationController.extend({
  before: function() {
    this.subscribe('travelRequests');
  },

  action: function() {
    this.render();
    this.render('travelNav', {to: 'topNav'});
  }

});

TravelIndexController = TravelController.extend();

NewTravelController = ApplicationController.extend();

ShowTravelController = TravelController.extend({
  before: function() {
    this.subscribe('singleTravelRequest', this.params._id).wait();
    ShowTravelController.__super__.before();
  },

  data: function() {
    if(this.ready()) {
      return TravelRequests.findOne(this.params._id);
    }
  }
});

EditTravelController = ApplicationController.extend({
  before: function() {
    this.subscribe('singleTravelRequest', this.params._id).wait();
    ShowTravelController.__super__.before();
  },

  data: function() {
    if(this.ready()) {
      return TravelRequests.findOne(this.params._id);
    }
  }
});
