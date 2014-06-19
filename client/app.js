/*****************************************************************************/
/* Interfaces */
/*****************************************************************************/
var IDeps = {
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
    },
    _dep: new Deps.Dependency,
    _value: null
};
/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/


_.extend(App, {
    ReactivityStorage: {
        feeds: _.extend(IDeps, {}),
        likes: _.extend(IDeps, {})
    }
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});


