var RouteUtilities = {
    renderLoadingHook: function(pause) {
        if(!this.ready()){
            console.log('not ready');
            this.render('Loading');
            pause();
        }
    }
};
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
//Router.onBeforeAction(RouteUtilities.renderLoadingHook, {only: ['facebook']});
Router.map(function () {
    this.route('home', {path: '/'});
    this.route('facebook', {
        path: '/facebook/feeds',
        yieldTemplates: {
            'Feeds': {to: 'body'}
        }
    });
    this.route('facebookPost', {
        path: '/facebook/post',
        yieldTemplates: {
            'Post': {to: 'body'}
        },
        template: 'Facebook'
    });
    this.route('anyFile', {
        where: 'server',
        path: '/img/:file(*)',
        action: function() {
            console.log('files');
            var fs = Meteor.require('fs');
            var fullFilePath = Meteor.call('getPath') + "/" + this.params.file;
            var file = fs.readFileSync(fullFilePath);

            var headers = {
                'Content-type': 'image/jpeg',
                'Content-Disposition': "attachment; filename=" + this.params.file
            };

            this.response.writeHead(200, headers);
            return this.response.end(file);
        }
    });
    this.route('me', {
        path: '/facebook/me',
        template: 'Facebook',
        yieldTemplates: {
            'Me': {to: 'body'}
        }
    });
    this.route('notFound', {
        path: '*'
    });
});
