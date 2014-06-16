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
    this.route('anyFile', {
        where: 'server',
        path: '/img/:file(*)',
        action: function() {
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
