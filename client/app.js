/*****************************************************************************/
/* DepsObj: Reactive storage */
/*****************************************************************************/
var DepsObj = function () {
    this._value = null;
    this._dep = new Deps.Dependency;
};
DepsObj.prototype = {
    get: function() {
        this._dep.depend();
        return this._value;
    },
    set: function(value) {
        if(EJSON.equals(this._value, value)) {
            return;
        }
        this._value = value;
        this._dep.changed();
    }
};
/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/


_.extend(App, {
    ReactivityStorage: {
        feeds: new DepsObj(),
        likes: new DepsObj(),
        friends: new DepsObj(),
        photo: new DepsObj(),
        userData: new DepsObj(),
        userGroups: new DepsObj()
    }
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});


