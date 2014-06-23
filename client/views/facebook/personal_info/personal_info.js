/*****************************************************************************/
/* PersonalInfo: Utilities */
/*****************************************************************************/
Template.PersonalInfo.utilities = {
    loadData: function() {
        Meteor.call('facebook/getUserData', function(err, res){
            App.ReactivityStorage.userData.set(res);
        });
        Meteor.call('facebook/getUserPhoto', function(err, res){
            App.ReactivityStorage.photo.set(res.data);
        });
    }
};

Template.PersonalInfo.utilities.loadData();
/*****************************************************************************/
/* PersonalInfo: Event Handlers and Helpers */
/*****************************************************************************/
Template.PersonalInfo.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PersonalInfo.helpers({
    data: function() {
        return App.ReactivityStorage.userData.get();
    },
    photo: function() {
        return App.ReactivityStorage.photo.get();
    }
});

/*****************************************************************************/
/* PersonalInfo: Lifecycle Hooks */
/*****************************************************************************/
Template.PersonalInfo.created = function () {
};

Template.PersonalInfo.rendered = function () {
};

Template.PersonalInfo.destroyed = function () {
};
