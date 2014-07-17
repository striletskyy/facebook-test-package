/*****************************************************************************/
/* Post: Event Handlers and Helpers */
/*****************************************************************************/
Template.Post.events({
    'click button': function(e) {
        /**
         * Post to facebook wall
         * @param {object} data 
         */
        var postFile = function(data) {
             Meteor.call('facebook/postFeed', data, function(err, res) {
                 if(err){
                    console.log(err);
                 } else {
                    console.log(res);
                 }
             });
             Router.go('facebook');
        };

        e.preventDefault();
        var files = post.file.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            var file = files[i];
            Images.insert(file, function (err, fileObj) {
                if(err){
                    console.log('err :', err);
                } 
                var data = {
                    message: post.message.value,
                    name: post.name.value,
                    description: post.description.value,
                    link: post.link.value,
                    picture: App.Config.homeUrl + "/cfs/files/images/" + fileObj._id
                };
                postFile(data);
                console.log('images url :', data.picture);
                //var image = Images.find({_id: fileObj._id});
                //console.log('imageUrl', image && image.url);
            });
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
    files: function() {
        return Images.find();
    }
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
