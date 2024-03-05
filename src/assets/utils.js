let localStorageGroup = { group: {}, user: {} };
localStorage.setItem("localStorageGroup", JSON.stringify(localStorageGroup));
function getHost() {
  var HOST = "";
  if (window.location.origin.includes("localhost")) {
    HOST = "http://localhost:8000";
  }
  // else if (window.location.origin.includes("teacher-v2.dreampotential.org/")) {
  //   HOST = "https://api.dreampotential.org";
  //   console.log(HOST);
  // }
  // else if (window.location.origin.includes("teacher-v2.alt-r.world")) {
  //   HOST = "https://python-base-api.alt-r.world";
  //   console.log(HOST);
  // } 
  else {
    // HOST = "http://localhost:8000"
    HOST = "http://192.168.29.136:8000";

  }

  return HOST;
}

function getServer() {
  var SERVER = "";
  if (window.location.origin.includes("localhost")) {
    SERVER = "http://localhost:8040/";
  } else {
    SERVER = "https://api.dreampotential.org";
  }
  return SERVER;
}

function getWebsocketHost() {
  var WEBSOCKET_HOST = "";
  if (window.location.origin.includes("localhost")) {
    WEBSOCKET_HOST = "ws://localhost:8000";
  } else {
    WEBSOCKET_HOST = 'ws://18.117.227.68:8040';
  }

  return WEBSOCKET_HOST;
}

export default { getHost, getServer, getWebsocketHost };
