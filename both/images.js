var imageStore = new FS.Store.S3("images", {
    region: "US Standard", //optional in most cases
    accessKeyId: "AKIAI5LRBT335O4LDWQQ", //required if environment variables are not set
    secretAccessKey: "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", //required if environment variables are not set
    bucket: "cyberion-meteor-dev" //required
});

Images = new FS.Collection('images', {
    stores: [imageStore]
});

console.log('stores', imageStore);

// [new FS.Store.FileSystem("images", {path: Meteor.call('getPath')})]