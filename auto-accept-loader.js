module.exports = function (source) {
    return source + `

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        console.log("MainPage disposed: " + global.__hmrLivesyncBackup.toString());
        setTimeout(() => {
            global.__hmrLivesyncBackup();
        });
    })
}`;
};