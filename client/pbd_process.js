Template.hello.greeting = function () {
  return "Welcome to pbd_process.";
};

Template.hello.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});

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