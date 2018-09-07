var application = require("application");
var update = require("./hot");
var reloadPage = require("ui/frame").reloadPage;

if(module.hot) {
    const originalLiveSync = global.__onLiveSync;
    global.__onLiveSync = function() {
        console.log("APP.JS --> LiveSyncing...");
        update("", {});
        setTimeout(() => {
            originalLiveSync();
        }, 0);
    };
}

application.run({ moduleName: "app-root" });