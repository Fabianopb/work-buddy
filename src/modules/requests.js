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

  getUsersAndEvents() {
    return axios.all([this.getUsers(), this.getAllEvents()]);
  }

  getUsers() {
    return axios.get(`${this.baseUrl}/user`, this.getHeaders());
  }

  getAllEvents() {
    return axios.get(`${this.baseUrl}/event`, this.getHeaders());
  }

  getEventById(id) {
    return axios.get(`${this.baseUrl}/event/${id}`, this.getHeaders());
  }

  postInvitation(starts_at, ends_at, users, name) {
    starts_at /= 1000;
    ends_at /= 1000;
    return axios.post(`${this.baseUrl}/event`, { starts_at, ends_at, users, name }, this.getHeaders());
  }

}

export default Request = new Request();
