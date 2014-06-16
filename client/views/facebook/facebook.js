/*****************************************************************************/
/* Facebook: Event Handlers and Helpers */
/*****************************************************************************/
Template.Facebook.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Facebook.helpers({
 
});

/*****************************************************************************/
/* Facebook: Lifecycle Hooks */
/*****************************************************************************/
Template.Facebook.created = function () {
  
};

Template.Facebook.rendered = function () {
 Meteor.call('getUserData', function(err, data){
  $('#result').html(JSON.stringify(data, undefined, 4));
 });
};

Template.Facebook.destroyed = function () {
};
