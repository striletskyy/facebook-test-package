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
          link: post.link.value
      };

      console.log(data);

      Meteor.call('postFeed', data, function(err, res) {
          if(err){
              console.log(err);
          } else {
              console.log(res);
          }
      });
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
