Template.GroupPage.utilities = {
    loadData: function(id) {
        Meteor.call('facebook/getData', id, function(err, res){
            Session.set('groupInfo'+id, res);
            console.log("Group info ", err||res);
        });
        Meteor.call('facebook/getData', id+"?fields=cover", function(err, res){
            console.log("cover ", res.cover.source);
            Session.set('groupCoverUrl'+id, res.cover.source);
        });
    }
};

/*****************************************************************************/
/* GroupPage: Event Handlers and Helpers */
/*****************************************************************************/
Template.GroupPage.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
});

Template.GroupPage.helpers({
    groupData: function() {
        Template.GroupPage.utilities.loadData(this.id);
        return Session.get('groupInfo'+this.id);
    },
    groupCoverUrl: function() {
        return Session.get('groupCoverUrl'+this.id);
    }
});

/*****************************************************************************/
/* GroupPage: Lifecycle Hooks */
/*****************************************************************************/
Template.GroupPage.created = function () {
};

Template.GroupPage.rendered = function () {
};

Template.GroupPage.destroyed = function () {
};
