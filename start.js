const Server = require('./app/Server');
const Bot = require('./app/Bot/main');

const Setting = require('./config/Setting');

new Server().then(data => {
    const {express, socket} = data;

    new Bot(Setting).then(bot => {
        console.log('test');
    });

    express.get('/', (req, res) => {
        res.end('456');
    });
});
