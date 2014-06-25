/*****************************************************************************/
/* Friends: Event Handlers and Helpers */
/*****************************************************************************/
Template.Friends.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Friends.helpers({
    friends: function() {
        return App.ReactivityStorage.MessagesPage.friendsList.get();
    }
});

/*****************************************************************************/
/* Friends: Lifecycle Hooks */
/*****************************************************************************/
Template.Friends.created = function () {
};

Template.Friends.rendered = function () {
};

Template.Friends.destroyed = function () {
};
