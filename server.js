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

const express = require('express')
const app = express()
const port = 8080


app.get('/', (req, res) => {
    res.send('Hello World! vs Hoi Dan IT & Eric')
})

app.get('/about', (req, res) => {
    res.send(`I'm Eric!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})