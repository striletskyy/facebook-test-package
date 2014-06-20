/*****************************************************************************/
/* LikesWall: Utilities */
/*****************************************************************************/
Template.LikesWall.utilities = {
    nextPage: null,
    loadData: function() {
        Meteor.call('getLikes', function(err, res) {
            if(err) {
                console.log(err);
            } else {
                Template.LikesWall.utilities.nextPage = res.paging.next;
                var rows = Template.LikesWall.utilities.groupData(res.data, 3);
                App.ReactivityStorage.likes.set(rows);
            }
        });
    },
    groupData: function(data, cols) {
        var newData = [];
        var tempData = [];
        for(var i = 0; i < data.length; i++){
            tempData.push(data[i]);
            if( (i + 1) % cols == 0 ){
                newData.push(_.compact(tempData));
                tempData = [];
            }
        }

        return newData;
    },
    reGroupData: function(data) {
        var newData = [];
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < data[i].length; j++){
                newData.push(data[i][j]);
            }
        }

        return newData;
    },
    combineArrays: function(first, second) {
        for(var i = 0; i < second.length; i++){
            first.push(second[i]);
        }

        return first;
    },
    addLikes: function(data) {
        if(data.paging.next){
            Template.LikesWall.utilities.nextPage = data.paging.next;
        } else {
            Template.LikesWall.utilities.nextPage = null;
        }
        var oldData = Template.LikesWall.utilities.reGroupData(App.ReactivityStorage.likes.get());
        Template.LikesWall.utilities.combineArrays(oldData, data.data);
        App.ReactivityStorage.likes.set(Template.LikesWall.utilities.groupData(oldData, 3));
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
        Meteor.call('executeQuery', query, function(err, res){
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