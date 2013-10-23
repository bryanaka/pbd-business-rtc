TravelRequests = new Meteor.Collection2('travel_requests', {
  schema: {
    first_name: {
      type: String,
      label: 'Traveler\'s First Name',
      max: 50
    },
    last_name: {
      type: String,
      label: 'Traveler\'s Last Name',
      max: 50
    },
    email: {
      type: String,
      label: 'Traveler\'s Email',
      regEx: SchemaRegEx.Email,
      max: 50
    },
    requestor_email: {
      type: String,
      label: 'Requestor Email',
      regEx: SchemaRegEx.Email,
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
    country: {
      type: String,
      label: 'Country',
      max: 50,
      optional: true
    },
    city: {
      type: String,
      label: 'City',
      max: 50,
      optional: true
    },
    state: {
      type: String,
      label: 'State/Region',
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
    travel_type: {
      type: String,
      label: 'Travel Type',
      optional: true
    },
    host_name: {
      type: String,
      label: 'Host Name',
      optional: true
    },
    host_contact: {
      type: String,
      label: 'Host Contact Info',
      optional: true
    },
    host_affiliation: {
      type: String,
      label: 'Hosts\' Affiliation',
      optional: true
    },
    lodging_name: {
      type: String,
      label: 'Lodging Name',
      optional: true
    },
    lodging_address: {
      type: String,
      label: 'Lodging Address',
      optional: true
    },
    lodging_phone: {
      type: String,
      label: 'Lodging Phone',
      optional: true
    },
    lodging_website: {
      type: String,
      regEx: SchemaRegEx.Url,
      label: 'Lodging Website',
      optional: true
    },
    conf_name: {
      type: String,
      label: 'Conference Name',
      optional: true
    },
    conf_role: {
      type: String,
      label: 'Conference Role',
      optional: true
    },
    conf_website: {
      type: String,
      regEx: SchemaRegEx.Url,
      label: 'Confernce Website',
      optional: true
    },
    status: {
      type:  String,
      label: 'Request Status',
      optional: true,
      allowedValues: ['pending', 'processing', 'requested', 'recieved', 'complete']
    },
    depart_on: {
      type: Date,
      label: 'Depart On'
    },
    return_on: {
      type: Date,
      label: 'Return On'
    },
    created_at: {
      type: Date,
      label: 'Created At'
    },
    updated_at: {
      type: Date,
      label: 'Updated At'
    },
    completed_at: {
      type: Date,
      label: 'Completed At',
      optional: true
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

var defaults = {
  country: 'United States',
  status:  'pending' 
};

var useTimestamps = function useTimestamps(doc, inserting) {
  var changeDoc = doc;
  if (inserting !== true ) { changeDoc = doc.$set; }
  if(typeof changeDoc.created_at === 'undefined') { changeDoc.created_at = new Date(); }
  changeDoc.updated_at = new Date();
};

var setRequestStatus = function setRequestStatus(doc, inserting) {
  var changeDoc = doc;
  if (inserting !== true ) { changeDoc = doc.$set; }
  if (typeof changeDoc.status === 'undefined') { changeDoc.status = 'pending'; }

};

TravelRequests.beforeInsert = function(doc) {
  useTimestamps(doc, true);
  return doc;
};

TravelRequests.beforeUpdate = function(docId, modifier){
  useTimestamps(modifier);
  return modifier;
};

TravelRequests.callbacks({
  insert: function(error, result) {
    if (error) {
      console.log("Insert Error:", error);
    } else {
      console.log('inserted: ', result);
      Router.go('show_travel', { _id: result });
    }
  },
  update: function(error, result) {
    if (error) {
      console.log("Update Error:", error);
    } else {
      console.log('updated:', result);
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
