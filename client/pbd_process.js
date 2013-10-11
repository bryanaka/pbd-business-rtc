Template.sessions_ui.events({
  'click #loginPersona': function () {
    Meteor.loginWithPersona({}, function() {
      console.log('logged in with Persona!');
    });
  },
  'click #logOut': function () {
    Meteor.logout();
  }
});

Template.travel.travel_requests = function() {
  return TravelRequests.find();
};

var TravelRequestsCollection = function() {
  return TravelRequests;
};

Template.travel.TravelRequestsCollection = TravelRequestsCollection;
Template.new_travel.TravelRequestsCollection = TravelRequestsCollection;
Template.edit_travel.TravelRequestsCollection = TravelRequestsCollection;
