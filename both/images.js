Images = new FS.Collection('images', {
    stores: [new FS.Store.FileSystem("images", {path: Meteor.call('getPath')})]
});