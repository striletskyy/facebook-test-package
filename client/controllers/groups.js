/*****************************************************************************/
/* FacebookController helpers */
/*****************************************************************************/
var helpers = {
    loadData: function() {
        Meteor.call('facebook/getUserGroups', function(err, res){
            if(err) {
                console.log(err);
            } else {
                console.log(res.data);
                App.ReactivityStorage.userGroups.set(res.data);
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
            feeds: App.ReactivityStorage.userGroups.get()
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