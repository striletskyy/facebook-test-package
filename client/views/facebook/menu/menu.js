/*****************************************************************************/
/* Menu: Event Handlers and Helpers */
/*****************************************************************************/
Template.Menu.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Menu.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Menu: Lifecycle Hooks */
/*****************************************************************************/
Template.Menu.created = function () {
};

Template.Menu.rendered = function () {
    /*var pointer = Router.current().path.indexOf('/', 1);
    var path = Router.current().path.slice(pointer + 1);
    console.log(path);
    switch (path) {
        case 'me':
            $('li.active').removeClass('active');
            $('li.me').addClass('active');
            break;
        default:
            $('li.active').removeClass('active');
            $('li.more').addClass('active');
    }*/
};

Template.Menu.destroyed = function () {
};
