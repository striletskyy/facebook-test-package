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
        userGroups: new DepsObj(),
        music: new DepsObj(),
        cover: new DepsObj(),
        MessagesPage: {
            dialogue: new DepsObj(),
            messages: new DepsObj(),
            friendsList: new DepsObj()
        },
        albums: new DepsObj(),
        SyncData: {
            syncMessages: new DepsObj()
        }
    },
    Utilities: {
        groupData: function(data, cols) {
            var newData = [];
            var tempData = [];
            for(var i = 0; i < data.length; i++){
                tempData.push(data[i]);
                if( (i + 1) % cols == 0 ){
                    newData.push(_.compact(tempData));
                    tempData = [];
                }
            }

            return newData;
        },
        reGroupData: function(data) {
            var newData = [];
            for(var i = 0; i < data.length; i++){
                for(var j = 0; j < data[i].length; j++){
                    newData.push(data[i][j]);
                }
            }

            return newData;
        },
        combineArrays: function(first, second) {
            for(var i = 0; i < second.length; i++){
                first.push(second[i]);
            }

            return first;
        }
    }
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});


function loadData() {
    console.log('loading data ...');
    Meteor.call('facebook/getPermissions', function(err, res) {
        if(err){
            console.log(err);
        } else if(res){
            console.log(res);
        } else {
            console.log('no data ...');
        }
    });
};

loadData();


