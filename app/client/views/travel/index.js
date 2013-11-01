Template.travelIndex.helpers({
  travel_requests: function() {
    return TravelRequests.find();
  }
});