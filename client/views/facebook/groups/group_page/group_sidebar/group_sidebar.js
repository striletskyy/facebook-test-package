/*****************************************************************************/
/* GroupSidebar: Event Handlers and Helpers */
/*****************************************************************************/
Template.GroupSidebar.utilities = {
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

Template.GroupSidebar.helpers({
    groupData: function() {
        Template.GroupPage.utilities.loadData(this.id);
        return Session.get('groupInfo'+this.id);
    },
    groupCoverUrl: function() {
        return Session.get('groupCoverUrl'+this.id);
    }
});

/*****************************************************************************/
/* GroupSidebar: Lifecycle Hooks */
/*****************************************************************************/
Template.GroupSidebar.created = function () {
};

Template.GroupSidebar.rendered = function () {
};

Template.GroupSidebar.destroyed = function () {
};
