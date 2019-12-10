import firebase from "../firebase.js";

const isUser = () => {
  var user = firebase.auth().currentUser;
  if (user) {
    return true;
  }
  return false;
}

export default { isUser };