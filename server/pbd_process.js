Meteor.startup(function () {
  // code to run on server at startup
});

Accounts.onCreateUser(function(options, user) {
  console.log('creating user');
  console.log(user);
  user.profile = {};
  user.profile.email = user.services.persona.email;
  console.log('User email is ' + user.profile.email);
  return user;
});
	
// Meteor.Publish('TravelRequests', function(){
//	return Posts.find({}); // publish the posts collection
// });
