/*****************************************************************************/
/* FriendsList: Event Handlers and Helpers */
/*****************************************************************************/
Template.FriendsList.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

function loadData(){
 Meteor.call('getFriendList', function(err, res){
  console.log(res.data);
  Session.set('friends', res.data);
 });
};
loadData();

Template.FriendsList.helpers({
 friends: function () {
  return Session.get('friends');
 }
});

/*****************************************************************************/
/* FriendsList: Lifecycle Hooks */
/*****************************************************************************/
Template.FriendsList.created = function () {
};

Template.FriendsList.rendered = function () {
};

Template.FriendsList.destroyed = function () {
};
