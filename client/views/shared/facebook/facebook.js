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
Template.Facebook.helpers({
 data: function(){
  //console.log(Session.get('data'));
  return Session.get('data');
 },
 photo: function() {
  return Session.get('photo');
 }
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
