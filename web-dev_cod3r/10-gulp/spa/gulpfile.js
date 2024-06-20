const { series, parallel } = require('gulp');
const gulp = require('gulp');
const { appHTML, appCSS, appJS, appIMG } = require('./gulptasks/app');
const { depsCSS, depsFonts } = require('./gulptasks/deps');
const { monitorarArquivos, servidor } = require('./gulptasks/servidor');

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)
