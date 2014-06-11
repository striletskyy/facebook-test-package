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
        path: '/facebook/feeds',
        yieldTemplates: {
            'Feeds': {to: 'body'}
        },
        onBeforeAction: function() {
            console.log(this.wait);
        }
    });
    this.route('facebookPost', {
        path: '/facebook/post',
        yieldTemplates: {
            'Post': {to: 'body'}
        },
        template: 'Facebook'
    });
    this.route('notFound', {
        path: '*'
    });
});
