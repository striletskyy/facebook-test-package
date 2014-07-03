/*****************************************************************************/
/* LastMessage: Event Handlers and Helpers */
/*****************************************************************************/
Template.LastMessage.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
});

Template.LastMessage.helpers({
    lastMessageInfo: function() {
        if(this.comments.data){
            var count = this.comments.data.length;
            return {
                content: this.comments.data[count-1].message,
                author: this.comments.data[count-1].from.name
            };
        } else {
            return "No messages  !!!";
        }
    },

});

/*****************************************************************************/
/* LastMessage: Lifecycle Hooks */
/*****************************************************************************/
Template.LastMessage.created = function () {
};

Template.LastMessage.rendered = function () {
};

Template.LastMessage.destroyed = function () {
};