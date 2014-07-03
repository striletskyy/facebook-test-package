/*****************************************************************************/
/* Tests: Event Handlers and Helpers */
/*****************************************************************************/
Template.FBTests.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});
function loadData() {
    console.log('loading data ...');
    Meteor.call('facebook/getPermissions', function(err, res) {
        if(err){
            console.log(err);
        } else if(res){
            console.log(res);
        } else {
            console.log('no data ...');
        }
    });
};

loadData();

Template.FBTests.helpers({

});

/*****************************************************************************/
/* Tests: Lifecycle Hooks */
/*****************************************************************************/
Template.FBTests.created = function () {
};

Template.FBTests.rendered = function () {
};

Template.FBTests.destroyed = function () {
};
