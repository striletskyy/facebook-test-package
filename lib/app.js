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
                return (process.env.PWD.toString() + "/client/app/images");
            }
        }
    };
    _.extend(App.Methods, {
        Utilities: UtilitiesMethods
    });
}

/*****************************************************************************/
/* Client side */
/*****************************************************************************/
/*****************************************************************************/
/* Client side */
/*****************************************************************************/

if(Meteor.isClient) {

}
