Template.login.events({
  'click #loginPersona': function () {
    Meteor.loginWithPersona({}, function() {
      console.log('logged in!');
    });
  }
});

Template.logout.events({
  'click #logOut': function () {
    Meteor.logout();
  }
});

Template.travel.travel_requests = function() {
   return TravelRequests.find();
};