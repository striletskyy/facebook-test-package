/*****************************************************************************/
/* GroupMembers: Event Handlers and Helpers */
/*****************************************************************************/

Template.GroupMembers.utilities = {
    loadData: function(id, limit) {
        Meteor.call('facebook/getGroupMembers', id, limit, function(err, res){
            console.log("Group members ", err||res);
            Session.set('groupMembers'+id, res.data);
        });
    }
};

Template.GroupMembers.helpers({
    members: function() {
        Template.GroupMembers.utilities.loadData(this.id, this.limit);
        return Session.get('groupMembers'+this.id);
    }
});

/*****************************************************************************/
/* GroupMembers: Lifecycle Hooks */
/*****************************************************************************/
Template.GroupMembers.created = function () {
};

Template.GroupMembers.rendered = function () {
};

Template.GroupMembers.destroyed = function () {
};
