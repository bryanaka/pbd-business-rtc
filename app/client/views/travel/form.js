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
  'click input[name=travel_type]': function(event) {
    console.log('log it');
    if (event.target.value === 'Foreign') {
      $('#foreign_fields').slideDown(600);
      $('input[name=country]').val('United States').removeAttr('disabled');
    } else {
      $('#foreign_fields').slideUp(600);
      $('input[name=country]').val('United States').attr('disabled', 'disabled');
    }
  }
});

Template.travelForm.rendered = function() {
  if( $('input[name=travel_type]').val() === 'Domestic' ) {
    $('input[name=country]').val('United States').attr('disabled', 'disabled');
  }
};
