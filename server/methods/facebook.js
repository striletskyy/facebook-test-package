FacebookMethods = {
    getUserData: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getUserData();
        return data;
    },
    getUserPhoto: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getUserPhoto();
        return data;
    },
    getFriendList: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getFriendList();
        return data;
    },
    getFeeds: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getFeeds();
        return data;
    },
    getPhoto: function(id) {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getPhoto(id);
        return data;
    },
    postFeed: function(data) {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        fb.postFeed(data);
    },
    getData: function(id) {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getData(id);
        return data;
    },
    getPath: function() {
        return (process.env.PWD.toString() + "/img");
    },
    getAlbums: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getAlbums();
        return data;
    },
    'getOwnPosts': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getOwnPosts();
        return data;
    },
    'getLikes': function () {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getLikes();
        return data;
    },
    'executeQuery': function(query) {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.executeQuery(query);
        return data;
    },
    'facebook/getUserGroups': function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getUserGroups();
        return data;
    }
};
/*_.extend(App, {
    FacebookMethods: FacebookMethods
});*/