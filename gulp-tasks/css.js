const {src, dest} = require('gulp');

// Подключение gulp-config
const path = require('../gulp-config/path')
const options = require('../gulp-config/options');

// Плагины
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const webpCss = require('gulp-webp-css');
const shorthand = require('gulp-shorthand');

// Обработка CSS
const css = () => {
    return src(path.css.src, {sourcemaps: true})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'CSS',
                message: error.message
            }))
        }))
        .pipe(concat('style.css'))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(dest(path.css.dest, {sourcemaps: true}))
        .pipe(rename({ suffix: '.min'}))
        .pipe(size({ title: 'Before csso:' }))
        .pipe(csso())
        .pipe(size({ title: 'After csso:' }))
        .pipe(dest(path.css.dest, {sourcemaps: true}));
}

module.exports = css;