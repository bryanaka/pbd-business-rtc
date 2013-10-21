/* jshint indent:2 */

Template.travelForm.events({
  'click .travel_conf': function(e) {
    var $conf_vals = $('#conference_fields');
    if(e.target.value === 'yes') {
      $conf_vals.slideDown(600);
    } else {
      $conf_vals.slideUp(600);
    }
  }
});