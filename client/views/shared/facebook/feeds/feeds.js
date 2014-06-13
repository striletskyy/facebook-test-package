/*****************************************************************************/
/* Feeds: Event Handlers and Helpers */
/*****************************************************************************/
Template.Feeds.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

function loadData(){
    Meteor.call('getFeeds', function(err, res){
        Session.set('feeds', res.data);
    });
    Meteor.call('getAlbums', function(err, res) {
        if(err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
    Meteor.call('getOwnPosts', function(err, res) {
        if(err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
};

loadData();

Template.Feeds.helpers({
  feeds: function() {
      return Session.get('feeds');
  }
});

/*****************************************************************************/
/* Feeds: Lifecycle Hooks */
/*****************************************************************************/
Template.Feeds.created = function () {
};

Template.Feeds.rendered = function () {
};

Template.Feeds.destroyed = function () {
};
