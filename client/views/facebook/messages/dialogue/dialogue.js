/*****************************************************************************/
/* Dialogue: Event Handlers and Helpers */
/*****************************************************************************/
Template.Dialogue.events({
    'submit form': function(e) {
        e.preventDefault();
        var data = {
            id: Router.current().params._id,
            message: $(e.target).find('[name=message]').val()
        }
        Meteor.call('facebook/postMessageToFriends', data, function(err, res) {
            if (err) {
                console.log(err);
            } else if (res) {
                console.log(res);
            }
        });
    }
});

Template.Dialogue.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Dialogue: Lifecycle Hooks */
/*****************************************************************************/
Template.Dialogue.created = function () {
};

Template.Dialogue.rendered = function () {
};

Template.Dialogue.destroyed = function () {
};
