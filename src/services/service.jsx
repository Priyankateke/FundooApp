import axios from "axios";

const apiUrl = "http://fundoonotes.incubation.bridgelabz.com/api/user";

class Service {
    Registration(data) {
      console.log(" data ", data);
      return axios.post(apiUrl + "/userSignUp", data);
    }
    Login(data) {
      console.log(" data ", data);
      return axios.post(apiUrl + "/login", data);
    }
  }
  export default Service;