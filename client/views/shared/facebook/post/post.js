/*****************************************************************************/
/* Post: Event Handlers and Helpers */
/*****************************************************************************/
Template.Post.events({
    'click button': function(e) {
        e.preventDefault();
        var data = {
            message: post.message.value,
            name: post.name.value,
            description: post.description.value,
            link: post.link.value,
            picture: post.file
        };
        console.log(data);
        /*Meteor.call('postFeed', data, function(err, res) {
            if(err){
                console.log(err);
            } else {
                console.log(res);
            }
        });
        Router.go('facebook');*/
    },
    'change input[type="file"]': function(e) {
        var files = e.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            Images.insert(files[i], function (err, fileObj) {
                console.log(fileObj);
            });
            console.log('writing ...');
        }
    }
});

Template.Post.helpers({

});

/*****************************************************************************/
/* Post: Lifecycle Hooks */
/*****************************************************************************/
Template.Post.created = function () {
};

Template.Post.rendered = function () {
};

Template.Post.destroyed = function () {
};
