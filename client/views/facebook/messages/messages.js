/*****************************************************************************/
/* Messages: Event Handlers and Helpers */
/*****************************************************************************/
Template.Messages.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});
function loadData() {
    Meteor.call('facebook/getUserMessages', function(err, res) {
        if(!!err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
};

loadData();
Template.Messages.helpers({

});

/*****************************************************************************/
/* Messages: Lifecycle Hooks */
/*****************************************************************************/
Template.Messages.created = function () {
};

Template.Messages.rendered = function () {
};

Template.Messages.destroyed = function () {
};
