var application = require("application");
var update = require("./hot");

if (module.hot) {
    console.log("APP.JS --> creating backup ...: " + global.__onLiveSync);

    global.__hmrLivesyncBackup = global.__onLiveSync;
    global.__onLiveSync = function () {
        console.log("APP.JS --> LiveSyncing...");
        update("", {});
    };
}


application.run({ moduleName: "app-root" });