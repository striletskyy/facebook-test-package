/*****************************************************************************/
/* Post: Event Handlers and Helpers */
/*****************************************************************************/
Template.Post.events({
    'click button': function(e) {
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
        console.log('files :', files);
        for (var i = 0, ln = files.length; i < ln; i++) {
            var file = files[i];
            var image = Images.insert(file, function (err, fileObj) {
                var fileName = "images-" + fileObj._id + "-" + file.name;
                var data = {
                    message: post.message.value,
                    name: post.name.value,
                    description: post.description.value,
                    link: post.link.value
                    //picture: "https://29e04356bc0a82129f08-9420084240a0442a36db484efcdc4d60.ssl.cf3.rackcdn.com/img-downloads.png"
                };
                //postFile(data);
                console.log('fileName :', fileName);
            });
            console.log('writing ... ', image);



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
