TravelController = ApplicationController.extend({
  before: function() {
    this.subscribe('travelRequests');
  },

  action: function() {
    this.render();
    this.render('travelNav', {to: 'topNav'});
  },

  singleBefore: function() {
    this.subscribe('singleTravelRequest', this.params._id).wait();
    this.subscribe('travelRequests');
  },

  singleData: function() {
    if(this.ready()) {
      return TravelRequests.findOne(this.params._id);
    }
  }

});

TravelIndexController = TravelController.extend();

NewTravelController = TravelController.extend();

ShowTravelController = TravelController.extend({
  before: function() {
    this.singleBefore();
  },

  data: function() {
    return this.singleData();
  }
});

EditTravelController = TravelController.extend({
  before: function() {
    this.singleBefore();
  },

  data: function() {
    return this.singleData();
  }
});
