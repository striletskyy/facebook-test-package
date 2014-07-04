/*****************************************************************************/
/* PhotosController helpers */
/*****************************************************************************/
var helpers = {
    loadData: function() {
        Meteor.call('facebook/getAlbums', function(err, res) {
            if(err){
                console.log(err);
            } else if(res) {
                console.log('photo album ...');
                console.log(res);
                App.ReactivityStorage.albums.set(res.data);
            } else {
                console.log('no data ...');
            }
        });

        var loadPhotosFromAlbum = function(idAlbum) {
            Meteor.call('facebook/getPhotoFromAlbum', idAlbum, function(err, res) {
                if(err){
                    console.log(err);
                } else if(res) {
                    console.log(res);
                } else {
                    console.log('no data ...');
                }
            });
        };
    },
    renderLoadingHook: function(pause) {
        if(!this.ready()){
            console.log('not ready');
            this.render('Loading');
            pause();
            helpers.loadData();
        }
    }
};
/*****************************************************************************/
/* PhotosController */
/*****************************************************************************/
PhotosController = RouteController.extend({
    data: function() {
        return {
            photos: App.ReactivityStorage.albums.get()
        };
    },
    waitOn: function() {
        return {
            ready: function() {
                return !!App.ReactivityStorage.albums.get();
            }
        };
    },
    action: function() {
        this.render();
    },
    onBeforeAction: helpers.renderLoadingHook
});