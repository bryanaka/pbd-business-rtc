Accounts.onCreateUser(function(options, user) {
  console.log('Created User: ', user);
  user.profile = {};
  user.profile.email = user.services.persona.email;
  return user;
});
