/*****************************************************************************/
/* Messages: Event Handlers and Helpers */
/*****************************************************************************/
Template.Messages.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Messages.helpers({
    href: function() {
        return "http://google.com";
    },
    ref: function() {
        return "author";
    },
    colorscheme: function() {
        return "dark";
    },
    kid_directed_site: function() {
        return "google.com";
    }
});

/*****************************************************************************/
/* Messages: Lifecycle Hooks */
/*****************************************************************************/
Template.Messages.created = function () {
};

Template.Messages.rendered = function () {
};

Template.Messages.destroyed = function () {
};
