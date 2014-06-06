/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});
Router.map(function () {
  this.route('home', {path: '/'});
  this.route('facebook', {
   path: '/facebook',
   onBeforeAction: function() {
    //console.log('before');
    //Session.set('data', Meteor.call('getUserData'));
    //console.log('data');
    //console.log(Session.get('data'));
   }
  });
});
