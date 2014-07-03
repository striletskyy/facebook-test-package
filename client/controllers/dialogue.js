/*****************************************************************************/
/* MessagesController helpers */
/*****************************************************************************/
var helpers = {
    loadData: function() {
        // Load messages
        Meteor.call('facebook/getUserMessages', function(err, res){
            if(err) {
                console.log(err);
            } else if(res) {
                var countDialogs = res.data.length;
                for(var i=0; i < countDialogs; i++) {
                    if (res.data[i].id === Router.current().params._id) {
                        console.log(Router.current().params._id);
                        App.ReactivityStorage.MessagesPage.dialogue.set(_.extend(res.data[i], {
                            messageId: Router.current().params._id
                        }));
                        //console.log(App.ReactivityStorage.MessagesPage.dialogue.get(res.data[i]));
                    }
                }
            } else {
                console.log('no data ...');
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
DialogueController = RouteController.extend({
    waitOn: function() {
        return {
            ready: function() {
                return !!App.ReactivityStorage.MessagesPage.dialogue.get() &&
                    App.ReactivityStorage.MessagesPage.dialogue.get().messageId == Router.current().params._id;
            }
        };
    },
    action: function() {
        this.render();
    },
    onBeforeAction: helpers.renderLoadingHook
});