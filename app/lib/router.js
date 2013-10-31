Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading'
});


Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'travel_index',
    controller: 'TravelController',
    action: 'index'
  });

  this.route('new_travel', {
    path: '/travel/new',
    controller: 'TravelController',
    action: 'new'
  });

  this.route('edit_travel', {
    path: '/travel/:_id/edit',
    controller: 'TravelController',
    action: 'edit'
  });

  this.route('show_travel', {
    path: '/travel/:_id',
    controller: 'TravelController',
    action: 'show'
  });

  this.route('travel_index', {
    path: '/travel',
    controller: 'TravelController',
    action: 'index'
  });

});