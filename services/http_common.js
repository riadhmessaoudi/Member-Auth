import axios from "axios";

const API_SERVER_URL = 'http://192.168.1.4:5000' // BACK-END API URL 
export default axios.create({
   baseURL: `${API_SERVER_URL}/api`,
  headers: {
    "Content-type": "application/json"
  }
});