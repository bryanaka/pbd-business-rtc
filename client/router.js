/* jshint camelcase: false, strict: false, undef: false, indent: 2 */
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

  this.route('travel_index', {
    path: '/travel',
    renderTemplates: {
      'travel_nav': {to: 'topNav'}
    }
  });

  this.route('new_travel', {
    path: '/travel/new',
    renderTemplates: {
      'travel_nav': {to: 'topNav'}
    }
  });

  this.route('show_travel', {
    path: '/travel/:_id',
    renderTemplates: {
      'travel_nav': {to: 'topNav'}
    }
  });

  this.route('edit_travel', {
    path: '/travel/:_id/edit',
    renderTemplates: {
      'travel_nav': {to: 'topNav'}
    }
  });

});