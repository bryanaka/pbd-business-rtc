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
