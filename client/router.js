Router.configure({
  layout: 'layout',
  //notFoundTemplate: 'notFound',
  //loadingTemplate: 'loading',
  renderTemplates: {
    // /* render the templated named footer to the 'footer' yield */
    // 'footer': { to: 'footer' },

    // /* render the template named sidebar to the 'sidebar' yield */
    // 'sidebar': { to: 'sidebar' }
  }
});


Router.map(function() {

  this.route('home', {
  path: '/',
    template: 'travel',
    renderTemplates: {
      'travel_nav': {to: 'topNav'}
    }
  });

  this.route('travel', {
    path: '/travel',
    template: 'travel',
    renderTemplates: {
      'travel_nav': {to: 'topNav'}
    }
  });

  this.route('new_travel', {
    path: '/travel/new',
    template: 'new_travel',
    renderTemplates: {
      'travel_nav': {to: 'topNav'}
    }
  });

  this.route('show_travel', {
    path: '/travel/:_id',
    data: function() { return TravelRequests.findOne(this.params._id); },
    template: 'show_travel',
    renderTemplates: {
      'travel_nav': {to: 'topNav'}
    }
  });

});