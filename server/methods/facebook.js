function Facebook(accessToken) {
    this.fb = Meteor.require('fbgraph');
    this.accessToken = accessToken;
    this.fb.setAccessToken(this.accessToken);
    this.options = {
        tomeout: 3000,
        pool: {maxSockets: Infinity},
        headers: {connection: 'keep-alive'}
    };
    this.fb.setOptions(this.options);
};

Facebook.prototype = {
    query: function(query, method) {
        var self = this;
        var method = (typeof method === 'undefined') ? 'get' : method;
        var data = Meteor.sync(function(done){
            self.fb[method](query, function(err, res) {
                done(null, res);
            });
        });

        return data.result;
    },
    queryWithData: function(query, data, method) {
        var method = (typeof method === 'undefined') ? 'get' : method;
        this.fb[method](query, data, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
    },
    queryWithData: function(query, data, method) {
        var method = (typeof method === 'undefined') ? 'get' : method;
        this.fb[method](query, data, function(err, res){
            if(err){
                console.log(err);
            } else {
                console.log(res);
            }
        });
    },
    getUserData: function() {
        return this.query('me');
    },
    getUserPhoto: function() {
        return this.query('me/picture?redirect=0&height=200&type=normal&width=200');
    },
    getFriendList: function(){
        return this.query('/me/taggable_friends');
    },
    getFeeds: function() {
        return this.query('/me/home');
    },
    getPhoto: function(id){
        return this.query(id + '/picture?redirect=0&height=200&type=normal&width=200');
    },
    getData: function(id) {
        return this.query(id);
    },
    postFeed: function(data){
        this.queryWithData('me/feed', data, 'post');
    }
};

Meteor.methods({
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
        console.log((process.env.PWD.toString() + "/img"));
        return (process.env.PWD.toString() + "/img");
    }
});
