const Dialer = require('dialer/src/Dialer');
const express = require ('express');
const httpServer = express();
const dialer = require('dialer').Dialer;
const { Server } = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');

const serverInstance = httpServer.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

const io = new Server(serverInstance);

const config = {
  url: 'http://uni-call.fcc-online.pl',
  login: '',
  password: ''
};

dialer.configure(config);

httpServer.get('/call/:number1/:number2', (req, res) => {
  const number1 = req.params.number1;
  const number2 = req.params.number2;
  dialer.call(number1,number2);
  res.json({success: true});
});

httpServer.use(bodyParser.json());
httpServer.use(cors());
httpServer.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

httpServer.post('/call/', async (req, res) => {
  const number1 = req.body.number;
  const number2 = '780725564';
  console.log('Dzwonie', number1, number2);
  console.log(req.body);
  bridge = await dialer.call(number1, number2);

  let oldStatus = null;
  let interval = setInterval(async () => {
    let currentStatus = await bridge.getStatus();

    if (currentStatus !== oldStatus) {
    oldStatus = currentStatus
    io.emit('status', currentStatus)
    }

    if (
        currentStatus === 'ANSWERED' ||
        currentStatus === 'FAILED' ||
        currentStatus === 'BUSY' ||
        currentStatus === 'NO ANSWER'
    ) {
        console.log('stop');
        clearInterval(interval);
    }
  }, 1000);

  res.json({ id: '123', status: bridge.STATUSES.NEW });
});
