/*****************************************************************************/
/* FriendsList: Utilities */
/*****************************************************************************/
Template.FriendsList.utilities = {
    loadData: function() {
        Meteor.call('getFriendList', function(err, res){
            App.ReactivityStorage.friends.set(res.data);
        });
    }
};
Template.FriendsList.utilities.loadData();
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

Template.FriendsList.helpers({
    friends: function () {
        return App.ReactivityStorage.friends.get();
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
