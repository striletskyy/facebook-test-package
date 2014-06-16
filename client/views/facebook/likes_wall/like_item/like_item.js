/*****************************************************************************/
/* LikeItem: Event Handlers and Helpers */
/*****************************************************************************/
Template.LikeItem.events({

});

Template.LikeItem.helpers({
    itemPhoto: function() {
        var self = this;
        Meteor.call('getPhoto', this.id,  function(err, res){
            Session.set('likesPhoto' + self.id, res.data.url);
        });

        return Session.get('likesPhoto' + this.id);
    },
    info: function() {
        var self = this;
        Meteor.call('getData', this.id,  function(err, res){
            Session.set('likesOwnerData' + self.id, res);
        });

        return Session.get('likesOwnerData' + this.id);
    }
});

/*****************************************************************************/
/* LikeItem: Lifecycle Hooks */
/*****************************************************************************/
Template.LikeItem.created = function () {
};

Template.LikeItem.rendered = function () {
};

Template.LikeItem.destroyed = function () {
};
