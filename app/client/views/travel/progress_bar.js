/* jshint indent:2 */
var statusInterval;

Template.travelProgressBar.rendered = function() {
  var $el = $(this);
  var status_level = $('#progress-phase').html();
  var $currentStatusBar = $('.progress-part-'+status_level);

  function blinkCurrentStatus() {
    $currentStatusBar.toggleClass('is_active');
  }

  function setStatus() {
    var i = 1,
        n = parseInt(status_level, 10);
    while(i < n) {
      $('.progress-part-'+String(i)).addClass('is_done');
      ++i;
    }
    statusInterval = window.setInterval(blinkCurrentStatus, 1000);
  }

  setStatus();

};

Template.travelProgressBar.destroyed = function() {
  clearInterval(statusInterval);
};
