var statusInterval;

Template.showTravel.rendered = function() {
  var status_level = $('#progress-phase').html();

  function blinkCurrentStatus() {
    $('.progress-part-'+status_level).toggleClass('is_active');
  }

  (function setStatus() {
    var i = status_level;
    for(i; i>1; i--) {
      $('.progress-part-'+i).addClass('is_done');
    }
    statusInterval = window.setInterval(blinkCurrentStatus, 1000);
  })();

};

Template.showTravel.destroyed = function() {
  clearInterval(statusInterval);
};
