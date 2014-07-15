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
            var companion;
            if(Meteor.user().profile.name == this.to.data[0].name) {
                companion = this.to.data[1].name;
            } else {
                companion = this.to.data[0].name;
            }
            return {
                content: this.comments.data[count-1].message,
                companion: companion
            };
        } else {
            return "No messages!";
        }
    },

    isItMine: function() {
        var count = this.comments.data.length;
        return Meteor.user().profile.name == this.comments.data[count-1].from.name ? true : false;
    }

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