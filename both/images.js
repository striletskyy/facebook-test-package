/** Debuging the CollectionFS, cfs-s3, output errors */
FS.debug = true;

var imageStore = new FS.Store.S3("images", {
    accessKeyId: "AKIAI5LRBT335O4LDWQQ", 
    secretAccessKey: "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", 
    bucket: "cyberion-meteor-dev" 
});

Images = new FS.Collection('images', {
    stores: [imageStore]
});

// [new FS.Store.FileSystem("images", {path: Meteor.call('getPath')})]

// [imageStore]