import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:5000/user/"

class UserService {
  getClients() {
    return axios
      .get(API_URL + "clients", { headers: authHeader() })
      .then(response => {
        return response.data.clients;
      });
  }
  getProfile() {
    return axios
      .get(API_URL + "profile", { headers: authHeader() })
      .then(response => {
        return response.data;
      });
  }
  addClients(client_name, client_email, client_phone_no) {
    return axios
      .post(API_URL + "clients/add", {
      client_name,
      client_email,
      client_phone_no
      }, { headers: authHeader() })
      .then(response => {
        return response.data;
      });
  }
  updateProfile(name, password) {
    return axios
      .post(API_URL + "profile/update", {
      name,
      password
      }, { headers: authHeader() })
      .then(response => {
        return response.data;
      });
  }
}

export default new UserService();
