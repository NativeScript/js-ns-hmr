var Observable = require("data/observable").Observable;
var topmost = require("ui/frame").topmost;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));

    }

    viewModel.onNavigate = function () {
        topmost().navigate('master-page')
    }

    viewModel.reload = function () {
        topmost().navigate('main-page')
    }

    return viewModel;
}

exports.createViewModel = createViewModel;