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
            return (process.env.PWD.toString() + "/img");
        }
    };
    _.extend(App.Methods, {
        Utilities: UtilitiesMethods
    });
}