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
        console.log(res);
        Session.set('feeds', res.data);
    });
    Meteor.call('getPhoto','35585623895', function(err, res){
        //console.log('Photo');
        //console.log(res);
        //Session.get('');
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
