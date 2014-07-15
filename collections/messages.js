Messages = new Meteor.Collection('messages');
Meteor.methods({
    syncMessages: function (messages) {
        var dialogues = messages.data;
        var countNewMessages = 0;
        for(var i = 0; i < dialogues.length; i++) {
            var dialogueMessages = dialogues[i].comments.data;
            for(var j = 0; j < dialogues[i].comments.data.length; j++) {
                var messageWithSameId = Messages.findOne({id: dialogues[i].comments.data[j].id});
                if(!messageWithSameId) {
                    countNewMessages++;
                    var messageId = Messages.insert(_.extend(_.pick(dialogueMessages[j], 'created_time', 'message', 'id')));
                    Messages.update(messageId, {$set: { sender: dialogues[i].to.data[1], receiver: dialogues[i].to.data[0]}})
                }
            }
        }
        return countNewMessages;
    }
});