const {src, dest} = require('gulp');

// Подключение gulp-config
const path = require('../gulp-config/path')
const options = require('../gulp-config/options');

// Плагины
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const webpHtml = require('gulp-webp-html');

// Обработка HTML
const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'HTML',
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({ title: 'Before htmlmin:' }))
        .pipe(htmlmin(options.htmlmin))
        .pipe(size({ title: 'After htmlmin:' }))
        .pipe(dest(path.html.dest))
}

module.exports = html;