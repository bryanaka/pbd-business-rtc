ApplicationController = RouteController.extend({
  constructor: function () {
    this.subscriptions = {};
    ApplicationController.__super__.constructor.apply(this, arguments);
  }
});