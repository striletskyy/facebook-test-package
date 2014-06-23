/*****************************************************************************/
/* FacebookController helpers */
/*****************************************************************************/
var helpers = {
    loadData: function() {
        Meteor.call('facebook/getFeeds', function(err, res){
            if(err) {
                console.log(err);
            } else {
                App.ReactivityStorage.feeds.set(res.data);
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
/* FacebookController */
/*****************************************************************************/
FacebookController = RouteController.extend({
    data: function() {
        return {
            feeds: App.ReactivityStorage.feeds.get()
        };
    },
    waitOn: function() {
        return {
            ready: function() {
                return !!App.ReactivityStorage.feeds.get();
            }
        };
    },
    action: function() {
        this.render();
    },
    onBeforeAction: helpers.renderLoadingHook
});
