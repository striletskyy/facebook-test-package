/*****************************************************************************/
/* App: The Global Application Namespace */
/*****************************************************************************/
App = {};

if (Meteor.isServer) {
    _.extend(App, {
        Methods: {
            /*
             * Methods for ...
             */
        },
        Lib: {
            /*
             * Libs for ...
             */
        }
    });

    var UtilitiesMethods = {
        getPath: function() {
            if(process.env.PWD.toString().indexOf('/mnt/data/') >= 0){
                return (process.env.PWD.toString() + "/programs/client/app/images");
            } else {
                return (process.env.PWD.toString() + "/public/images");
            }
        }
    };
    _.extend(App.Methods, {
        Utilities: UtilitiesMethods
    });

    var testRackit = function() {
        console.log('working rackit ...');
        var rackit = new Rackit.Rackit({
            'user': 'nickelance',
            'key': '30bc1a7f733d49c4a5dcc84fe8359311'
        });

        rackit.init(function(err) {
            // Add a local file to the cloud
            if(err){
                console.log(err);
            }
            rackit.add(process.env.PWD.toString() + '/img/loading18.gif', function(err, cloudpath) {
                // Get the CDN URI of the file
                console.log(cloudpath || err);
                console.log('rackspace images:', rackit.getURI(cloudpath));
            });
        });
    };

    //testRackit();
}

/*****************************************************************************/
/* Client side */
/*****************************************************************************/
/*****************************************************************************/
/* Client side */
/*****************************************************************************/

if(Meteor.isClient) {

}
