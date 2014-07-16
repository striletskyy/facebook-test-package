Template.Interests.utilities = {
    loadData: function() {
        Meteor.call('facebook/getUserInterests', function(err, res){
            App.ReactivityStorage.interests.set(res.data);
            console.log(err||res.data);
        });
    }
}

Template.Interests.utilities.loadData();
/*****************************************************************************/
/* Interests: Event Handlers and Helpers */
/*****************************************************************************/
Template.Interests.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Interests.helpers({
    interests: function() {
        return App.ReactivityStorage.interests.get();
    },
    musicians: function() {
        return _.where(App.ReactivityStorage.interests.get(), {category: "Musician/band"});
    }
});

/*****************************************************************************/
/* Interests: Lifecycle Hooks */
/*****************************************************************************/
Template.Interests.created = function () {
};

Template.Interests.rendered = function () {
};

Template.Interests.destroyed = function () {
};
