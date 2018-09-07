module.exports = function (source) {
    return source + '\nmodule.hot && module.hot.accept();\n';
};