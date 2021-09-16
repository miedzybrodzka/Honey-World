const express = require('express');
const jsonServer = require('json-server');
const chokidar = require('chokidar');
const cors = require('cors');
const history = require('connect-history-api-fallback');

const fileName = process.argv[2] || './data.json';
const port = process.argv[3] || 3500;

let router = undefined;

const app = express();

const createServer = () => {
    delete require.cache[require.resolve(fileName)];
    setTimeout(() => {
        router = jsonServer.router(fileName.endsWith('.js')
        ? require(fileName)() : fileName);
    }, 100)
}

createServer();

app.use(history());
app.use('/', express.static('./build'));
app.use(cors());
app.use(jsonServer.bodyParser)
app.use('/api', (req,resp,next) => router(req, resp, next));

chokidar.watch(fileName).on('change', () => {
    console.log('Ponowne wczytywanie danych usługi...');
    createServer();
    console.log('Zakończono ponowne wczytywanie danych usługi.');
});

app.listen(port, () => console.log(`Usługa internetowa działa na porcie ${port}`));