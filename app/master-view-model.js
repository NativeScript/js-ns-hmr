var observableModule = require("data/observable");
var topmost = require("ui/frame").topmost;

function MasterViewModel() {
	var viewModel = observableModule.fromObject({
        onTap: function() {
            this.counter--;
            console.log("tap tap");
        },

        onNavigate: function () {
            topmost().navigate('main-page');
        }
	});

	return viewModel;
}

module.exports = MasterViewModel;
