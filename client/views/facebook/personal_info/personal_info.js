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
function loadData(){
 Meteor.call('getUserData', function(err, res){
  //console.log(res);
  Session.set('data', res);
 });
 Meteor.call('getUserPhoto', function(err, res){
  Session.set('photo', res.data);
  //console.log(res.data);
 });
};
loadData();

Template.PersonalInfo.helpers({
 data: function() {
  return Session.get('data');
 },
 photo: function() {
  return Session.get('photo');
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
