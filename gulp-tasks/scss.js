const {src, dest} = require('gulp');

// Подключение gulp-config
const path = require('../gulp-config/path')
const options = require('../gulp-config/options');

// Плагины
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const webpCss = require('gulp-webp-css');

// Обработка SCSS
const scss = () => {
    return src(path.scss.src, {sourcemaps: true})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'SCSS',
                message: error.message
            }))
        }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(autoprefixer({grid: true}))
        .pipe(shorthand())
        .pipe(dest(path.scss.dest, {sourcemaps: true}))
        .pipe(rename({ suffix: '.min'}))
        .pipe(size({ title: 'Before csso:' }))
        .pipe(csso())
        .pipe(size({ title: 'After csso:' }))
        .pipe(dest(path.scss.dest, {sourcemaps: true}));
}

module.exports = scss;