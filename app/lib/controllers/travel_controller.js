TravelController = ApplicationController.extend({

  waitOn: function() {
    var subs = this.subscriptions;
    var id = this.params._id;
    subs.travelRequests = Meteor.subscribe('travelRequests');
    subs.singleTravelRequest = Meteor.subscribe('singleTravelRequest', id);
    return _.values(subs);
  },

  index: function() {
    this.renderTravel();
  },

  new: function() {
    this.renderTravel();
  },

  show: function() {
    this.data = Session.get('currentTravelRequest');
    this.renderTravel();
  },

  edit: function() {
    this.data = TravelRequests.findOne({_id: this.params._id});
    this.renderTravel();
  },

  renderTravel: function() {
    this.render();
    this.render('travelNav', {to: 'topNav'});
  }

});
