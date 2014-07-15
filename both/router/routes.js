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

Router.map(function () {
    this.route('home', {path: '/'});
    this.route('facebook', {
        path: '/facebook/feeds',
        yieldTemplates: {
            'Feeds': {to: 'body'},
            'FriendsList': {to: 'right'}
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
            console.log('create read stream :', Images.findOne());
            this.response.writeHead(200, {});
            
            return 'helo !!!';
            
            var fullFilePath = Meteor.call('getPath') + "/" + this.params.file;
            var file = fs.readFileSync(fullFilePath);

            var headers = {
                'Content-type': 'image/jpeg',
                'Content-Disposition': "attachment; filename=" + this.params.file
            };

            return this.response.end(file);
        }
    });
    this.route('me', {
        path: '/facebook/me',
        template: 'Facebook',
        yieldTemplates: {
            'Me': {to: 'body'},
            'Menu': {to: 'menu'},
            'FriendsList': {to: 'right'},
            'SideMenu': {to: 'left'}
        }
    });
    this.route('likesWall', {
        path: '/facebook/likes',
        template: 'Facebook',
        yieldTemplates: {
            'LikesWall': {to: 'body'},
            'Menu': {to: 'menu'},
            'FriendsList': {to: 'right'}
        }
    });
    this.route('groups', {
        path: 'facebook/groups',
        template: 'Facebook',
        yieldTemplates: {
            'Groups': {to: 'body'},
            'Menu': {to: 'menu'},
            'FriendsList': {to: 'right'},
            'SideMenu': {to: 'left'}
        }
    });
    this.route('messages', {
        path: 'facebook/messages',
        template: 'Facebook',
        yieldTemplates: {
            'Messages': {to: 'body'},
            'Menu': {to: 'menu'},
            'FriendsList': {to: 'right'},
            'Friends': {to: 'left'}
        }
    });
    this.route('messagesList', {
        path: 'facebook/messages/:_id',
        template: 'Facebook',
        yieldTemplates: {
            'Messages': {to: 'body'},
            'Menu': {to: 'menu'},
            'FriendsList': {to: 'right'},
            'Friends': {to: 'left'}
        },
        data: function() {
            var id = this.params._id;
            var message = _.filter(App.ReactivityStorage.MessagesPage.friendsList.get(), function(el) {
                return el.id == id;
            });
            console.log(id, message);
            return message;
        }
    });
    this.route('facebookTests', {
        path: 'facebook/tests',
        template: 'Facebook',
        yieldTemplates: {
            'FBTests': {to: 'body'}
        }
    });
    this.route('photos', {
        path: 'facebook/photos'
    });
    this.route('dialogue', {
        path: 'facebook/messages/:_id',
        template: 'Facebook',
        yieldTemplates: {
            'Dialogue': {to: 'body'},
            'Menu': {to: 'menu'},
            'FriendsList': {to: 'right'},
            'Friends': {to: 'left'}
        },
        data: function() {
            var id = this.params._id;
            return {
                id: id,
                dialogue: App.ReactivityStorage.MessagesPage.dialogue.get()
            };
        }
    });
    this.route('music', {
        path: 'facebook/music',
        template: 'Facebook',
        yieldTemplates: {
            'Music': {to: 'body'},
            'Menu': {to: 'menu'},
            'FriendsList': {to: 'right'},
            'Friends': {to: 'left'}
        }
    });
    this.route('notFound', {
        path: '*'
    });

});
