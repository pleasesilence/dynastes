const {src, dest} = require('gulp');

// Подключение gulp-config
const path = require('../gulp-config/path')
const options = require('../gulp-config/options');

// Плагины
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const webpack = require('webpack-stream')

// Обработка JS
const js = () => {
    return src(path.js.src, {sourcemaps: true})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'JS',
                message: error.message
            }))
        }))
        .pipe(babel())
        .pipe(webpack(options.webpack))
        .pipe(dest(path.js.dest, {sourcemaps: true}));
}

module.exports = js;