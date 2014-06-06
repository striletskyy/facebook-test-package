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

Facebook.prototype.query = function(query, method) {
 var self = this;
 var method = (typeof method === 'undefined') ? 'get' : method;
 var data = Meteor.sync(function(done){
  self.fb[method](query, function(err, res) {
   done(null, res);
  });
 });

 return data.result;
};

Facebook.prototype.getUserData = function() {
 return this.query('me');
};
Facebook.prototype.getUserPhoto = function() {
 return this.query('me/picture?redirect=0&height=200&type=normal&width=200');
};
Facebook.prototype.getFriendList = function(){
 return this.query('/me/taggable_friends');
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
 }
});
