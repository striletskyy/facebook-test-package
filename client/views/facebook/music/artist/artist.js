Template.Artist.utilities = {
    loadData: function(id) {
        Meteor.call('facebook/getData', id, function(err, res){
            console.log(err || res);
            Session.set('artist' + id, res);
        });
    },
};
/*****************************************************************************/
/* Artist: Event Handlers and Helpers */
/*****************************************************************************/
Template.Artist.events({

});

Template.Artist.helpers({
    artist: function() {
        if(!Session.get('artist' + this.id)){
            Template.Artist.utilities.loadData(this.id);
        }
        return Session.get('artist' + this.id);
    }
});

/*****************************************************************************/
/* Artist: Lifecycle Hooks */
/*****************************************************************************/
Template.Artist.created = function () {
};

Template.Artist.rendered = function () {
};

Template.Artist.destroyed = function () {
};
