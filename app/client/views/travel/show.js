Template.show_travel.rendered = function() {

  function displayCurrentStatus(level) {
    $('.progress-part-'+level).toggleClass('is_active');
    setTimeout(function() {
      displayCurrentStatus(level);
    }, 1000);
  }

  function setStatus(level) {
    var i = level;
    for(i; i>1; i--) {
      $('.progress-part-'+i).addClass('is_done');
    }
    displayCurrentStatus(level);
  }

  var status_level = $('#progress-phase').html();

  setStatus(status_level);

};