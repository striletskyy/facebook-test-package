/*****************************************************************************/
/* LikesWall: Utilities */
/*****************************************************************************/
Template.LikesWall.utilities = {
    nextPage: null,
    loadData: function() {
        Meteor.call('facebook/getLikes', function(err, res) {
            if(err) {
                console.log(err);
            } else {
                Template.LikesWall.utilities.nextPage = res.paging.next;
                var rows = App.Utilities.groupData(res.data, 3);
                App.ReactivityStorage.likes.set(rows);
            }
        });
    },
    addLikes: function(data) {
        if(data.paging.next){
            Template.LikesWall.utilities.nextPage = data.paging.next;
        } else {
            Template.LikesWall.utilities.nextPage = null;
        }
        var oldData = App.Utilities.reGroupData(App.ReactivityStorage.likes.get());
        App.Utilities.combineArrays(oldData, data.data);
        App.ReactivityStorage.likes.set(App.Utilities.groupData(oldData, 3));
    }
};

Template.LikesWall.utilities.loadData();
/*****************************************************************************/
/* LikesWall: Event Handlers and Helpers */
/*****************************************************************************/
Template.LikesWall.events({
    'click .btn': function() {
        var control = 'https://graph.facebook.com/v2.0/655663197860831';
        var query = 'me' + Template.LikesWall.utilities.nextPage.slice(control.length);
        Meteor.call('facebook/executeQuery', query, function(err, res){
            if(err) {
                console.log(err);
            } else {
                Template.LikesWall.utilities.addLikes(res);
            }
        });
    }
});

Template.LikesWall.helpers({
    likes: function() {
        return App.ReactivityStorage.likes.get();
    }
});

/*****************************************************************************/
/* LikesWall: Lifecycle Hooks */
/*****************************************************************************/
Template.LikesWall.created = function () {
};

Template.LikesWall.rendered = function () {
    $('li.active').removeClass('active');
    $('li.more').addClass('active');
};

Template.LikesWall.destroyed = function () {
};