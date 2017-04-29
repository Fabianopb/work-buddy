import * as io from 'socket.io-client';

class Socket {

  constructor() {
    this.socket = io.connect('https://theworkbuddy.au-syd.mybluemix.net/socket');
  }

  registerMessage(message, callback) {
    this.socket.on(message, callback);
  }

}

export default Socket = new Socket();
