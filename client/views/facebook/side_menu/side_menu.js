/*****************************************************************************/
/* SideMenu: Event Handlers and Helpers */
/*****************************************************************************/
Template.SideMenu.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.SideMenu.helpers({
    groups: function() {
        if(!!App.ReactivityStorage.userGroups.get()) {
            Meteor.call('facebook/getUserGroups', function(err, res){
                if(err) {
                    console.log(err);
                } else {
                    Session.set('groupsMenu', res.data);
                }
            });
        } else {
            Session.set('groupsMenu', App.Utilities.reGroupData(App.ReactivityStorage.userGroups.get()));
        }

        return Session.get('groupsMenu');
    }
});

/*****************************************************************************/
/* SideMenu: Lifecycle Hooks */
/*****************************************************************************/
Template.SideMenu.created = function () {
};

Template.SideMenu.rendered = function () {
};

Template.SideMenu.destroyed = function () {
};
