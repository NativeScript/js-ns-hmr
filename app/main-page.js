var createViewModel = require("./main-view-model").createViewModel;
var update = require("./hot");

function onNavigatingTo(args) {
    var page = args.object;

    page.bindingContext = createViewModel();
}

const original = global.__onLiveSync;
global.__onLiveSync = function() {
    console.log("MAIN_PAGE.JS --> LiveSyncing...");
    update('99fff8e5645877b64f69', {});
    module.hot.accept();
    original();
};

exports.onNavigatingTo = onNavigatingTo;
