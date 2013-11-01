Meteor.publish('currentUser', function() {
  return Meteor.users.find(this.userId);
});

Meteor.publish('travelRequests', function() {
  return TravelRequests.find({}, {
    fields: {
      'first_name': true,
      'last_name' : true,
      'email'     : true,
      'depart_on' : true,
      'return_on' : true,
      'status'    : true
    }
  });
});

Meteor.publish('singleTravelRequest', function(id) {
  return TravelRequests.find(id);
});
