/*****************************************************************************/
/* GroupFiles: Event Handlers and Helpers */
/*****************************************************************************/
Template.GroupFiles.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
});

Template.GroupFiles.utilities = {
    loadData: function(id, limit) {
        Meteor.call('facebook/getGroupFiles', id, limit, function(err, res){
            console.log("Group files ", err||res);
            Session.set('groupFiles'+id, res.data);
        });
    }
};

Template.GroupFiles.helpers({
    files: function() {
        Template.GroupFiles.utilities.loadData(this.id, this.limit);
        return Session.get('groupFiles'+this.id);
    }
});

/*****************************************************************************/
/* GroupFiles: Lifecycle Hooks */
/*****************************************************************************/
Template.GroupFiles.created = function () {
};

Template.GroupFiles.rendered = function () {
};

Template.GroupFiles.destroyed = function () {
};
