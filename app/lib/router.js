Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading'
});

function routeResource(name) {
  name = name.toLowerCase();
  var upcasename = name.charAt(0).toUpperCase() + name.slice(1) ;
  this.route(name+'Index',       {path: '/'+name});
  this.route('new' + upcasename, {path: '/'+name+'/new'});
  this.route('edit'+ upcasename, {path: '/'+name+'/:_id/edit'});
  this.route('show'+ upcasename, {path: '/'+name+'/:_id'});
}

Router.map(function() {
  var resource = routeResource.bind(this);

  this.route('home', {
    path: '/',
    template: 'travelIndex',
    controller: 'IndexTravelController'
  });

  resource('travel');

});