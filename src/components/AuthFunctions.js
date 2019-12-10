import firebase from "../firebase.js";

export default class AuthFunctions {
  static isUser = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      return true;
    }
    return false;
  }
}