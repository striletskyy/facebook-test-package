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
        }
    });
    this.route('facebook', {
        path: '/facebook/post',
        yieldTemplates: {
            'Post': {to: 'body'}
        }
    });
});
