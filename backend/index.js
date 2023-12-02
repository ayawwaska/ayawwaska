const Dialer = require('dialer/src/Dialer');
const express = require ('express');
const httpServer = express();
const dialer = require('dialer').Dialer;
const { Server } = require('socket.io');

httpServer.listen(3000, function () {
    console.log('Example app listening on port 3000!')
   });

const config = {
    url:'http://uni-call.fcc-online.pl',
    login:'focus15',
    password: '#l9upoqwedsd'
};

Dialer.configure(config);



httpServer.get('/call/:number1/:number2', (req, res) =>{
    const number1 = req.params.number1;
    const number2 = req.params.number2;
    dialer.call (number1,number2);
    res.json({success: true});
});

const cors = require('cors');
const bodyParser = require('body-parser');
httpServer.use(bodyParser.json());
httpServer.use(cors());
httpServer.use((req, res, next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
 next();
});

httpServer.post('/call/', async (req, res) => {
  const number1 = req.body.number;
  const number2 = '780725564' // tutaj dejemy swój 
  console.log('Dzwonie', number1, number2)
  bridge = await dialer.call(number1, number2);
  let oldStatus = null
  let interval = setInterval(async () => {
    let currentStatus = await bridge.getStatus();
    if (currentStatus !== oldStatus) {
       oldStatus = currentStatus
       io.emit('status', currentStatus)
    }
    if (
      currentStatus === "ANSWERED" ||
      currentStatus === "FAILED" ||
      currentStatus === "BUSY" ||
      currentStatus === "NO ANSWER"
  ) {
      console.log("stop");
      clearInterval(interval);
  }
 }, 1000)
 res.json({ id: '123', status: bridge.STATUSES.NEW 
 });
})








