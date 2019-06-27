import axios from "axios";

function Auth() {
  function checkPreviousSession(callback) {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    if (username && token) {
      console.log("trying previous username/token");
      axios
        .post("/api/validateToken", { username, token })
        .then(response => {
          if (response && response.data && response.data.valid) {
            console.log('previous username/token is valid', response);
            callback(response.data.user);
          } else {
            console.log('previous username/token is expired', response);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("no previous token found");
    }
  }

  function logIn(username, password, callback) {
    axios
      .post("/api/authenticate", { username, password })
      .then(response => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        console.log('logged in, notifying callback')
        callback(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function createUser(
    username,
    password,
    location,
    description,
    userAvatar,
    cb
  ) {
    axios
      .post("/api/createuser", {
        username,
        password,
        location,
        description,
        userAvatar
      })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        cb(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function logOut(cb) {
    console.log("logging out the user");
    localStorage.removeItem("token");
    cb();
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  return {
    checkPreviousSession,
    logIn,
    logOut,
    getToken,
    createUser
  };
}

export default Auth();
