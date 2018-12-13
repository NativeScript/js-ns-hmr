var observableModule = require("tns-core-modules/data/observable");
var topmost = require("tns-core-modules/ui/frame").topmost;

function MasterViewModel() {
	var viewModel = observableModule.fromObject({
        onTap: function() {
            this.counter--;
            console.log("tap tap");
        },

        onNavigate: function () {
            topmost().navigate('main-page');
        },

        reload: function () {
            topmost().navigate('master-page');
        }
	});

	return viewModel;
}

module.exports = MasterViewModel;
