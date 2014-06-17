/*****************************************************************************/
/* FacebookController helpers */
/*****************************************************************************/
var helpers = {
    feeds: null,
    loadData: function() {
        Meteor.call('getFeeds', function(err, res){
            if(err) {
                console.log(err);
            } else {
                helpers.feeds = res.data;
                Session.set('feeds', res.data);
                Session.set('isReady', true);
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
            feeds: Session.get('feeds')
        };
    },
    waitOn: function() {
        return {
            ready: function() {
                return Session.equals('isReady', true);
            }
        };
    },
    action: function() {
        this.render();
    },
    onBeforeAction: helpers.renderLoadingHook
});
