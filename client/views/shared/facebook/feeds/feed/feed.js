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
    ownerData: function() {
        var date = moment(this.created_time);
        var self = this;
        Meteor.call('getData', this.from.id,  function(err, res){
            Session.set('link' + self.from.id, res.link);
        });
        Meteor.call('getPhoto', this.from.id,  function(err, res){
            Session.set('profilePhoto' + self.from.id, res.data.url);
        });
        return {
            time: date.startOf('hour').fromNow(),
            linkOwn: Session.get('link' + self.from.id),
            photo: Session.get('profilePhoto' + self.from.id),
            name: this.from.name
        };
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
