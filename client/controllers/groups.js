/*****************************************************************************/
/* FacebookController helpers */
/*****************************************************************************/
var helpers = {
    loadData: function() {
        Meteor.call('facebook/getUserGroups', function(err, res){
            if(err) {
                console.log(err);
            } else {
                var rows = App.Utilities.groupData(res.data, 3);
                App.ReactivityStorage.userGroups.set(rows);
            }
        });
    },
    renderLoadingHook: function(pause) {
        if(!this.ready()){
            console.log('not ready');
            this.render('Loading');
            pause();
            helpers.loadData();
        }
    }
};
/*****************************************************************************/
/* GroupsController */
/*****************************************************************************/
GroupsController = RouteController.extend({
    data: function() {
        return {
            groups: App.ReactivityStorage.userGroups.get()
        };
    },
    waitOn: function() {
        return {
            ready: function() {
                return !!App.ReactivityStorage.userGroups.get();
            }
        };
    },
    action: function() {
        this.render();
    },
    onBeforeAction: helpers.renderLoadingHook
});