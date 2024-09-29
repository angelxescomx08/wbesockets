import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    console.log('received: %s', data);
    const payload = JSON.stringify({
      payload: data.toString(),
      type: "message"
    })
    ws.send(payload);
  });

  //ws.send('Hola desde el servidor');
});