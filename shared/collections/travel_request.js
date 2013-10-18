TravelRequests = new Meteor.Collection2('travel_requests', {
  schema: {
    first_name: {
      type: String,
      label: 'First Name',
      max: 50
    },
    last_name: {
      type: String,
      label: 'Last Name',
      max: 50
    },
    email: {
      type: String,
      label: 'Email',
      max: 50
    },
    requestor_email: {
      type: String,
      label: 'Requestor Email',
      max: 50
    },
    pid: {
      type: String,
      label: 'Project ID',
      min: 3
    },
    phone: {
      type: String,
      label: 'Phone',
      max: 15
    },
    depart_on: {
      type: Date,
      label: 'Departure Date'
    },
    return_on: {
      type: Date,
      label: 'Return Date'
    },
    city: {
      type: String,
      label: 'City',
      max: 50
    },
    state: {
      type: String,
      label: 'State',
      max: 20
    },
    personal_days: {
      type: Number,
      label: 'Personal Days',
      optional: true
    },
    estimated_airfare: {
      type: Number,
      label: 'Estimated Airfare Cost'
    },
    estimated_cost: {
      type: Number,
      label: 'Estimated Other Costs'
    },
    justification: {
      type: String,
      label: 'Justification',
      max: 500
    },
    status: {
      type:  String,
      label: 'Request Status',
      optional: true,
      allowedValues: ['pending', 'processing', 'requested', 'recieved', 'complete']
    }
  },

  virtualFields: {
    full_name: function(travelRequest) {
      return travelRequest.first_name + ' ' + travelRequest.last_name;
    },
    depart_date: function(travelRequest) {
      return moment(travelRequest.depart_on).format('MMM Do YYYY');
    },
    return_date: function(travelRequest) {
      return moment(travelRequest.return_on).format('MMM Do YYYY');
    },
    computed_status: function(travelRequest) {
      return 'pending';
    }
  }
});

TravelRequests.callbacks({
  insert: function(error, result) {
    if (error) {
      console.log("Insert Error:", error);
    } else {
      Router.go('show_travel', { _id: result.data._doc._id });
    }
  },
  update: function(error, result) {
    if (error) {
      console.log("Update Error:", error);
    } else {
      Router.go('show_travel', { _id: result.data._doc._id });
    }
  },
  remove: function(error) {
    if (error) {
      console.log("Remove Error:", error);
    } else {
      Router.go('travel_index');
    }
  }
});
