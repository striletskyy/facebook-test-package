/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Template.Home.events({
  'click button': function (e, tmpl) {
    Meteor.call('getUserData', function(err, data){
     console.log(err);
     console.log(data);
     $('#result').html(JSON.stringify(data, undefined, 4));
    });
   }
});

Template.Home.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
