var Facebook = App.Lib.Facebook;
var FacebookMethods = {
    'facebook/getUserData': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getUserData();
        return data;
    },
    'facebook/getUserPhoto': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getUserPhoto();
        return data;
    },
    'facebook/getFriendList': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getFriendList();
        return data;
    },
    'facebook/getFeeds': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getFeeds();
        return data;
    },
    'facebook/getPhoto': function(id) {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getPhoto(id);
        return data;
    },
    'facebook/postFeed': function(data) {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        fb.postFeed(data);
    },
    'facebook/getData': function(id) {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getData(id);
        return data;
    },
    'facebook/getAlbums': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getAlbums();
        return data;
    },
    'facebook/getPhotoFromAlbum': function(idAlbum) {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getPhotoFromAlbum(idAlbum);
        return data;
    },
    'facebook/getOwnPosts': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getOwnPosts();
        return data;
    },
    'facebook/getLikes': function () {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getLikes();
        return data;
    },
    'facebook/executeQuery': function(query) {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.executeQuery(query);
        return data;
    },
    'facebook/getUserGroups': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getUserGroups();
        return data;
    },
    'facebook/getUserMessages': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getUserMessages();
        return data;
    },
    'facebook/getPermissions': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getPermissions();
        return data;
    }
};

_.extend(App.Methods, {
    Facebook: FacebookMethods
});