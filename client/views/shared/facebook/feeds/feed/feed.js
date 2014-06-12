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

Template.Feed.helpers({
    photo: function() {
        var self = this;
        Meteor.call('getPhoto', this.from.id,  function(err, res){
            Session.set('profilePhoto' + self.from.id, res.data.url);
        });
        return Session.get('profilePhoto' + self.from.id);
    },
    time: function() {
        var date = moment(this.created_time);
        return date.startOf('hour').fromNow();
    },
    linkOwn: function() {
        var self = this;
        Meteor.call('getData', this.from.id,  function(err, res){
            Session.set('link' + self.from.id, res.link);
        });

        return Session.get('link' + self.from.id);
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
