Template.SyncBtn.utilities = {
    sync: function () {
        $("#sync-btn").button('loading');
        var loadMessages = function() {
            Meteor.call('syncMessages', App.ReactivityStorage.SyncData.syncMessages.get(), function(error, countNewMessages) {
                if(countNewMessages) {
                    Template.SyncBtn.rendered.createNotification("Successfully updated! (New messages: " + countNewMessages + ")");
                }
            });
        };

        Meteor.call('facebook/getUserMessages', function(err, res){
            App.ReactivityStorage.SyncData.syncMessages.set(res);
            if(App.ReactivityStorage.SyncData.syncMessages.get()) {
                loadMessages();
            }
            $("#sync-btn").button('reset');
        });

    }
};

Template.SyncBtn.rendered = {
    createNotification: function (content) {
        var element = $("#sync-btn");
        element.popover({
            content: content
        }).popover('show');
    }
}
/*****************************************************************************/
/* SyncBtn: Event Handlers and Helpers */
/*****************************************************************************/
Template.SyncBtn.events({
    'click #sync-btn': function(e) {
        e.preventDefault();
        Template.SyncBtn.utilities.sync();
    }
});

Template.SyncBtn.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* SyncBtn: Lifecycle Hooks */
/*****************************************************************************/
Template.SyncBtn.created = function () {
};

Template.SyncBtn.rendered = function () {
};

Template.SyncBtn.destroyed = function () {
};

//setInterval(function() { return Template.SyncBtn.utilities.sync() },10000);
