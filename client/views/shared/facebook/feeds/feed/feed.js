/* Feed: Event Handlers and Helpers */
/*****************************************************************************/
Template.Feed.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

function loadData(){
    Meteor.call('getPhoto', '35585623895',  function(err, res){
        //console.log(this.name);
        //console.log(res);
        //Session.set('feeds', res.data);
    });
};

loadData();

Template.Feed.helpers({
    photo: function() {
        return Session.get('profilePhoto');
    }
});

/*****************************************************************************/
/* Feed: Lifecycle Hooks */
/*****************************************************************************/
Template.Feed.created = function () {
};

Template.Feed.rendered = function () {
};

Template.Feed.destroyed = function () {
};
