var Facebook = function(accessToken) {
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
    _query: function(query, method) {
        var self = this;
        var method = (typeof method === 'undefined') ? 'get' : method;
        var data = Meteor.sync(function(done){
            self.fb[method](query, function(err, res) {
                done(null, res);
            });
        });

        return data.result;
    },
    _queryWithData: function(query, data, method) {
        var method = (typeof method === 'undefined') ? 'get' : method;
        this.fb[method](query, data, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
    },
    getUserData: function() {
        return this._query('me');
    },
    getUserPhoto: function() {
        return this._query('me/picture?redirect=0&height=200&type=normal&width=200');
    },
    getFriendList: function(){
        return this._query('/me/taggable_friends');
    },
    getFeeds: function() {
        return this._query('/me/home');
    },
    getPhoto: function(id){
        return this._query(id + '/picture?redirect=0&height=200&type=normal&width=200');
    },
    getData: function(id) {
        return this._query(id);
    },
    postFeed: function(data){
        this._queryWithData('me/feed', data, 'post');
    },
    getAlbums: function() {
        return this._query('me/albums');
    },
    getPhotoFromAlbum: function(idAlbum){
        return this._query(idAlbum.toString() + '/photos');
    },
    getOwnPosts: function() {
        return this._query('me/posts');
    },
    getLikes: function() {
        return this._query('me/likes');
    },
    executeQuery: function(query) {
        return this._query(query);
    },
    getUserGroups: function() {
        return this._query('/me/groups');
    },
    getUserMessages: function() {
        return this._query('me/inbox');
    },
    getPermissions: function() {
        return this._query('me/permissions');
    },

};

_.extend(App.Lib, {
    Facebook: Facebook
});