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
};
loadData();

Template.Feeds.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
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
