const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// Подключение gulp-config
const path = require('./gulp-config/path');

// Подключение gulp-tasks
clear = require('./gulp-tasks/clear');
html = require('./gulp-tasks/html');
scss = require('./gulp-tasks/scss');
js = require('./gulp-tasks/js');
img = require('./gulp-tasks/img')

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root,
            serveStaticOptions: {
                extensions: ['html'],
            },
        },
        port: 8080,
        ui: { port: 8081 },
        open: true,
    });
}

// Наблюдение
const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
}

// Задачи
exports.clear = clear;
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;


// Сборка
exports.dev = series(
    clear,
    parallel(html, scss, js, img),
    parallel(watcher, server)
)