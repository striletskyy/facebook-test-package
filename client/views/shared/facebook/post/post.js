/*****************************************************************************/
/* Post: Event Handlers and Helpers */
/*****************************************************************************/
Template.Post.events({
    'click button': function(e) {
        e.preventDefault();
        var files = post.file;
        for (var i = 0, ln = files.length; i < ln; i++) {
            var file = files[i];
            Images.insert(file, function (err, fileObj) {
                var fileName = "images-" + fileObj._id + "-" + file.name;
                var data = {
                    message: post.message.value,
                    name: post.name.value,
                    description: post.description.value,
                    link: post.link.value,
                    picture: "http://communityplus.meteor.com/img/" + fileName
                };
                console.log(data.picture);
                postFile(data);
            });
            console.log('writing ...');
        }
        var postFile = function(data) {
             Meteor.call('postFeed', data, function(err, res) {
                 if(err){
                    console.log(err);
                 } else {
                    console.log(res);
                 }
             });
             Router.go('facebook');
        }
    },
    'change input[type="file"]': function(e) {
        /*var files = e.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            var file = files[i];
            Images.insert(file, function (err, fileObj) {
                console.log(file);
                var fileName = "images-" + fileObj._id + "-" + file.name;
                console.log(fileName);
            });
            console.log('writing ...');
        }*/
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
