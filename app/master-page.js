var MasterViewModel = require("./master-view-model");
var masterViewModel = new MasterViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = masterViewModel;

	console.log("---> master");
}

exports.pageLoaded = pageLoaded;
