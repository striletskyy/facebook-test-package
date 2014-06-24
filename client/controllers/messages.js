/*****************************************************************************/
/* MessagesController helpers */
/*****************************************************************************/
var helpers = {
    loadData: function() {
        Meteor.call('facebook/getUserMessages', function(err, res){
            if(err) {
                console.log(err);
            } else {
                App.ReactivityStorage.messages.set(res.data);
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
/* MessagesController */
/*****************************************************************************/
MessagesController = RouteController.extend({
    data: function() {
        return {
            messages: App.ReactivityStorage.messages.get()
        };
    },
    waitOn: function() {
        return {
            ready: function() {
                return !!App.ReactivityStorage.messages.get();
            }
        };
    },
    action: function() {
        this.render();
    },
    onBeforeAction: helpers.renderLoadingHook
});