/*****************************************************************************/
/* Group: Event Handlers and Helpers */
/*****************************************************************************/
Template.Group.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Group.helpers({
    itemPhoto: function() {
        var self = this;
        Meteor.call('facebook/getPhoto', this.id,  function(err, res){
            //Session.set('groupsPhoto' + self.id, res.data.url);
            //console.log('groups');
            //console.log(res);
        });

        return Session.get('facebook/groupsPhoto' + this.id);
    },
    info: function() {
        var self = this;
        Meteor.call('facebook/getData', this.id,  function(err, res){
            Session.set('groupsOwnerData' + self.id, res);
            console.log(res);
        });

        return Session.get('groupsOwnerData' + this.id);
    }
});

/*****************************************************************************/
/* Group: Lifecycle Hooks */
/*****************************************************************************/
Template.Group.created = function () {
};

Template.Group.rendered = function () {
};

Template.Group.destroyed = function () {
};
