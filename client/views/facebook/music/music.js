Template.Music.utilities = {
    loadData: function() {
        Meteor.call('facebook/getUserMusic', function(err, res){
            App.ReactivityStorage.music.set(res);
            console.log(res);
        });
    }
};

Template.Music.utilities.loadData();
/*****************************************************************************/
/* Music: Event Handlers and Helpers */
/*****************************************************************************/
Template.Music.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Music.helpers({
    musicList: function() {
        return App.ReactivityStorage.music.get();
    }
});

/*****************************************************************************/
/* Music: Lifecycle Hooks */
/*****************************************************************************/
Template.Music.created = function () {
};

Template.Music.rendered = function () {
};

Template.Music.destroyed = function () {
};
