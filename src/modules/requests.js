import axios from 'axios';

class Request {

  constructor() {
    this.baseUrl = 'https://theworkbuddy.au-syd.mybluemix.net';

    this.getHeaders = () => {
      return {
        headers: {
          'Content-Type': 'application/json',
        }
      };
    }
  }

  getUsers() {
    return axios.get(`${this.baseUrl}/user`, this.getHeaders());
  }

  postInvitation(startTime, participants) {
    return axios.post(`${this.baseUrl}/event`, { startTime, participants }, this.getHeaders());
  }

}

export default Request = new Request();
