// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('run request ...')
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h3>Hello World!</h3>');
//     res.write('<h2>from ERIC & HOI DAN IT</h2>');
//     res.end();
// })

// server.listen(3000, 'localhost', () => {
//     console.log('Node.JS server is running on port: 3000')
// })

import express from 'express';
import configViewEngine from './config/viewEngine';
require('dotenv').config();

const app = express()
const port = process.env.PORT;
// backup: const port = process.env.PORT || 3000;


configViewEngine(app);
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send(`I'm Eric!`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})