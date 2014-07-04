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
                console.log(res);
                App.ReactivityStorage.MessagesPage.messages.set(res.data)
            }
        });

        // Load friends
        var loadFriendsList = function() {
            var getCorrectId = function(message){
                var persons = [];
                var addEl = function(el){ persons.push(el); };
                if(message.comments.data[0].from){
                    addEl(message.comments.data[0].from);
                }
                _.each(message.to.data, addEl);
                var correctPersons = _.filter(persons, function(el) {
                    return el.id != '655663197860831';
                });
                return _.first(correctPersons).id;
            };
            var saveFriend = function(data, index, id, message){
                var temp = {
                    message: message,
                    messageIdOwner: id
                };
                _.extend(data, temp);
                friends.push(data);
                if(index === len){
                    App.ReactivityStorage.MessagesPage.friendsList.set(friends);
                }
            };
            // Processing data
            var getData = function(message, index) {
                var id = getCorrectId(message);
                Meteor.call('facebook/getData', id, function(err, res){
                    if(err) {
                        console.log(err)
                    } else {
                        saveFriend(res, index, id, message);
                    }
                });
            };
            // Load friends for each message
            var correctMessages = _.filter(App.ReactivityStorage.MessagesPage.messages.get(), function(el) {
                return  el.comments &&
                        el.comments.data[0] &&
                        el.comments.data[0].message &&
                        el.comments.data[0].from;
            });
            _.each(correctMessages, getData);

            // Private fields
            var friends = [];
            var len = correctMessages.length - 1;
        }
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
            messages: App.ReactivityStorage.MessagesPage.messages.get(),
            friends: App.ReactivityStorage.MessagesPage.friendsList.get()
        };
    },
    waitOn: function() {
        return {
            ready: function() {
                return !!App.ReactivityStorage.MessagesPage.messages.get() &&
                       !!App.ReactivityStorage.MessagesPage.friendsList.get();
            }
        };
    },
    action: function() {
        this.render();
    },
    onBeforeAction: helpers.renderLoadingHook
});