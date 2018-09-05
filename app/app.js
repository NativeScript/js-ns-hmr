var application = require("application");
var update = require("./hot");
var reloadPage = require("ui/frame").reloadPage;

application.run({ moduleName: "app-root" });

if(module.hot) {
    //const original = global.__onLiveSync;
    global.__onLiveSync = function() {
        console.log("APP.JS --> LiveSyncing...");
        update("", {});
        setTimeout(() => {
            reloadPage();
        }, 0);
    };
}
