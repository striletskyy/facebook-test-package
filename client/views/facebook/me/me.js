/*****************************************************************************/
/* Me: Event Handlers and Helpers */
/*****************************************************************************/
Template.Me.events({
    'click li': function(e) {
        //e.preventDefault();

    }
});



Template.Me.helpers({

});

/*****************************************************************************/
/* Me: Lifecycle Hooks */
/*****************************************************************************/
Template.Me.created = function () {
};

Template.Me.rendered = function () {
    $('li.active').removeClass('active');
    $('li.me').addClass('active');
};

Template.Me.destroyed = function () {
};
