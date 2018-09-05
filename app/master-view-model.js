var observableModule = require("data/observable");

function MasterViewModel() {
	var viewModel = observableModule.fromObject({
        onTap: function() {
            this.counter--;
            console.log("tap tap tap");
        }
	});

	return viewModel;
}

module.exports = MasterViewModel;
