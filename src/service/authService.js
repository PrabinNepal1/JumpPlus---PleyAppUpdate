import axios from 'axios';

const baseurl = "http://localhost:8080";

const signup = (username, password, email, displayName) => {
    return axios
        .post(baseurl + "/add/user", {
                username,
                password,
                email,
                displayName
        });
}

const login = (username, password) => {
    return axios
        .post(baseurl + "/add/user", {
                username,
                password
        })
        .then((response) => {
            
            sessionStorage.setItem("user", JSON.stringify(response.data));

            return response.data;
        })
}

const logout = () => {
    sessionStorage.removeItem("user");
  };
  
const getCurrentUser = () => {
    return JSON.parse(sessionStorage.getItem("user"));
  };


  export default {
    signup,
    login,
    logout,
    getCurrentUser,
  };