this.TravelController = this.ApplicationController.extend({

  before: [
    function() {
      if(!this.params._id) {
        this.subscribe('travelRequests').wait();
      }
    }, 
    function() {
      console.log(this.params._id);
      if(this.params._id) {
        console.log(this.params._id);
        this.subscribe('travelRequest', this.params._id).wait();
      }
    }
  ],

  index: function() {
    this.renderTravel();
  },

  new: function() {
    this.renderTravel();
  },

  show: function() {
    this.data = function() { 
      return TravelRequests.findOne({_id: this.params._id});
    };
    this.renderTravel();
  },

  edit: function() {
    this.data = function() { 
      return TravelRequests.findOne({_id: this.params._id});
    };
    this.renderTravel();
  },

  renderTravel: function() {
    this.render();
    this.render('travelNav', {to: 'topNav'});
  }

});
