/** Debuging the CollectionFS, cfs-s3, output errors */
FS.debug = true;

/** Store */
var imageStore = new FS.Store.S3("images", {
    accessKeyId: "access-key", 
    secretAccessKey: "secret-access-key", 
    bucket: "bucket" 
});

Images = new FS.Collection('images', {
    stores: [imageStore]
});

// [new FS.Store.FileSystem("images", {path: Meteor.call('getPath')})]

// [imageStore]

if(Meteor.isServer) {
	Meteor.publish('images', function(author) {
		return Images.find();
	});
}

if(Meteor.isClient) {
	Meteor.subscribe('images');
} 

