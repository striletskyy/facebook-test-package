// Set up login services
Meteor.startup(function() {

    // Remove configuration entries in case service is already configured
    ServiceConfiguration.configurations.remove({
        $or: [{
            service: "facebook"
        },  {
            service: "google"
        }]
    });

    // Add Facebook configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "facebook",
        "appId": "769472786418635",
        "secret": "7dd51609fa39ec9112466df80b28306a"
    });
    // Add Google configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "google",
        "clientId": "581798009459-qj541h4rtisof7cl3p85fmh08321lsk2.apps.googleusercontent.com",
        "client_email": "581798009459-qj541h4rtisof7cl3p85fmh08321lsk2@developer.gserviceaccount.com",
        "secret": "GTWFbom5w2Phu4W6HbSsykFH"
    });
});