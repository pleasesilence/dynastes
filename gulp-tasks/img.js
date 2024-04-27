const {src, dest} = require('gulp');

// Подключение gulp-config
const path = require('../gulp-config/path')
const options = require('../gulp-config/options');

// Плагины
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

// Обработка IMG
const img = () => {
    return src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'IMG',
                message: error.message
            }))
        }))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(imagemin(options.imagemin))
        .pipe(dest(path.img.dest))
}

module.exports = img;