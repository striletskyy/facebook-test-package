/*****************************************************************************/
/* Photos: Event Handlers and Helpers */
/*****************************************************************************/
Template.Photos.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});
function loadData() {
    Meteor.call('facebook/getAlbums', function(err, res) {
        if(err){
            console.log(err);
        } else if(res) {
            console.log(res);
        } else {
            console.log('no data ...');
        }
    });

    Meteor.call('facebook/getPhotoFromAlbum', '598683340225484', function(err, res) {
        if(err){
            console.log(err);
        } else if(res) {
            console.log(res);
        } else {
            console.log('no data ...');
        }
    });
};

loadData();

Template.Photos.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Photos: Lifecycle Hooks */
/*****************************************************************************/
Template.Photos.created = function () {
};

Template.Photos.rendered = function () {
};

Template.Photos.destroyed = function () {
};
