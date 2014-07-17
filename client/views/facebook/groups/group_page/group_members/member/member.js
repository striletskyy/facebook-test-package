/*****************************************************************************/
/* Member: Event Handlers and Helpers */
/*****************************************************************************/
Template.Member.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
});

Template.Member.utilities = {
    loadInfo: function(id) {
        Meteor.call('facebook/getData', id, function(err, res){
            Session.set('memberInfo'+id, res);
            console.log(res);
        });
    },
    loadPhoto: function(id) {
        Meteor.call('facebook/getPhoto', id, function(err, res){
            //console.log(err||res.data.url);
            Session.set('memberPhoto'+id, res.data.url);
        });
    }
};

Template.Member.helpers({
    memberInfo: function() {
        Template.Member.utilities.loadInfo(this.id);
        return Session.get('memberInfo'+this.id);
    },
    memberPhoto: function() {
        Template.Member.utilities.loadPhoto(this.id);
        return Session.get('memberPhoto'+this.id);
    }
});

/*****************************************************************************/
/* Member: Lifecycle Hooks */
/*****************************************************************************/
Template.Member.created = function () {
};

Template.Member.rendered = function () {
};

Template.Member.destroyed = function () {
};
