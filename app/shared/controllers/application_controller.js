this.ApplicationController = RouteController.extend({
  renderWithTopNav: function(name) {
    this.render(name, {to: 'topNav'});
    this.render();
  }
});