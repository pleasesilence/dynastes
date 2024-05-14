const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

const createPath = (page) => path.resolve(__dirname, './dist', `${page}.html`);
const createPathCSS = (page) => path.resolve(__dirname, './dist/css', `${page}.css`);

app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Listening ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
    res.sendFile(createPathCSS('style.min'))
})