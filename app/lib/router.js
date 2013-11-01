Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading'
});


Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'travelIndex',
    controller: 'IndexTravelController'
  });

  this.route('newTravel', {
    path: '/travel/new',
  });

  this.route('editTravel', {
    path: '/travel/:_id/edit'
  });

  this.route('showTravel', {
    path: '/travel/:_id'
  });

  this.route('travelIndex', {
    path: '/travel',
  });

});