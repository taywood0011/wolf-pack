import axios from "axios";

function Auth() {
  let loggedIn = false;

  function logIn(username, password, cb) {
    
    axios
      .post("/api/authenticate", { username, password })
      .then(response => {
        console.log(response.data)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username)
        loggedIn = true;
        cb(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function createUser(username, password, location, description, cb) {
    console.log("cb:",cb)
    axios
      .post("/api/createuser", { username, password, location, description })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        loggedIn = true;
        cb(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function logOut(cb) {
	console.log('logging out the user')
	localStorage.removeItem("token");
	loggedIn = false;
	cb()
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function isLoggedIn() {
    console.log("loggedIn:", loggedIn);
    return loggedIn;
  }

  return {
    isLoggedIn,
    logIn,
    logOut,
    getToken,
    createUser
  };
}

export default Auth();
