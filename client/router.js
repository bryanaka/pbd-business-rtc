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
	data: TravelRequests.find(),
    template: 'travel',
    renderTemplates: {
      'topNav': {to: 'topNav'}
    }
  });
});