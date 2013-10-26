Meteor.publish('travelRequests', function() {
  return TravelRequests.find({}, {
    fields: {
      'first_name': 1,
      'last_name' : 1,
      'email'     : 1,
      'depart_on' : 1,
      'return_on' : 1,
      'status'    : 1
    }
  });
});

Meteor.publish('travelRequest', function(id) {
  return TravelRequests.findOne(id);
});
