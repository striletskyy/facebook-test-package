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
   data: {email: 'striletskyy@hotmail.com'},
   onBeforeAction: function() {
    console.log('before');
    var self = this;
    Meteor.call('getUserData', function(err, data) {
     // ...
    });
   }
  });
});
