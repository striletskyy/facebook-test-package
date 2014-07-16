/*****************************************************************************/
/* Interest: Event Handlers and Helpers */
/*****************************************************************************/
Template.Interest.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Interest.helpers({
    isMusicial: function() {
        return this.category == "Musician/band";
    }
});

/*****************************************************************************/
/* Interest: Lifecycle Hooks */
/*****************************************************************************/
Template.Interest.created = function () {
};

Template.Interest.rendered = function () {
};

Template.Interest.destroyed = function () {
};
