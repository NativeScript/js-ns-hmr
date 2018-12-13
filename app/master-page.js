var frameModule = require("tns-core-modules/ui/frame");
var MasterViewModel = require("./master-view-model");
var masterViewModel = new MasterViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = masterViewModel;
}

exports.pageLoaded = pageLoaded;
