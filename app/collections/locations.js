travel_locations = new Meteor.Collection2('travel_locations', {
	schema: {
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
    depart_on: {
      type: Date,
      label: 'Depart On'
    },
    return_on: {
      type: Date,
      label: 'Return On'
    }
	}
});