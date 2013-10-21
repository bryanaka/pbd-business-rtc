/* jshint indent:2 */

Template.travelForm.events({
  'click .travel_conf': function(e) {
    var $conf_vals = $('#conference_fields');
    if(e.target.value === 'yes') {
      $conf_vals.slideDown(600);
    } else {
      $conf_vals.slideUp(600);
    }
  },
  'click .js-travelType': function(event) {
  	console.log('log it');
    if (event.target.value === 'Foreign') {
      $('#foreign_fields').slideDown(600);
    } else {
      $('#foreign_fields').slideUp(600);
    }
  }
});