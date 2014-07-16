/*****************************************************************************/
/* Groups: Event Handlers and Helpers */
/*****************************************************************************/
Template.Groups.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
});

Template.Groups.utilities = {
    loadData: function() {
        Meteor.call('facebook/getUserGroups', function(err, res){
            App.ReactivityStorage.groups.set(res.data);
            console.log(err||res);
        });
    },
};

Template.Groups.utilities.loadData();

Template.Groups.helpers({
    groups: function() {
        return App.ReactivityStorage.groups.get();
    }
});

