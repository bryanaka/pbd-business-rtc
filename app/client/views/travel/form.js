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
    var $country = $('input[name=country]');
    if (event.target.value === 'Foreign') {
      $('#foreign_fields').slideDown(600);
      $country.val('').removeAttr('disabled');
    } else {
      $('#foreign_fields').slideUp(600);
      $country.val('United States').attr('disabled', 'disabled');
    }
  }
});

Template.travelForm.rendered = function() {
  var $travel_type = $('input[name=travel_type]:checked').val();
  if( $travel_type === 'Domestic' ) {
    $('input[name=country]').val('United States').attr('disabled', 'disabled');
  } else if($travel_type === 'Foriegn') {
    $('#foreign_fields').show();
  }
};
