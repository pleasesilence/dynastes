const pathSrc = './src';
const pathDest = './dist';

module.exports = {
    root: pathDest,
    html : {
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },
    css : {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css'
    },
    scss : {
        src: pathSrc + '/sass/*.scss',
        watch: pathSrc + '/sass/**/*.scss',
        dest: pathDest + '/css'
    },
    js : {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },
    img : {
        src: pathSrc + '/img/**/*.png',
        watch: pathSrc + '/img/**/*.png',    
        dest: pathDest + '/img'
    }
}