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

Template.travel_index.travel_requests = function() {
  return Schema.TravelRequests.find();
};

// var travelRequestForm = new AutoForm(Schema.TravelRequests);

// var travelRequestHelper = {
//   TravelRequestsCollection: travelRequestForm
// };

var TravelRequestsCollection = function() {
  return Schema.TravelRequests;
};

// Template.travel.TravelRequestsCollection.helpers(travelRequestHelper);
// Template.new_travel.TravelRequestsCollection.helpers(travelRequestHelper);
// Template.edit_travel.TravelRequestsCollection.helpers(travelRequestHelper);
// Template.show_travel.TravelRequestsCollection.helpers(travelRequestHelper);

Template.travel_index.TravelRequestsCollection = TravelRequestsCollection;
Template.new_travel.TravelRequestsCollection = TravelRequestsCollection;
Template.edit_travel.TravelRequestsCollection = TravelRequestsCollection;
Template.show_travel.TravelRequestsCollection = TravelRequestsCollection;

//postsSubscription = Meteor.Subscribe('TravelRequests');
