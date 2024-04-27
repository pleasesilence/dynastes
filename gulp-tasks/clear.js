const del = require('del');

// Подключение gulp-config
const path = require('../gulp-config/path');

// Удаление дериктории
const clear = () => {
    return del(path.root);
}

module.exports = clear;