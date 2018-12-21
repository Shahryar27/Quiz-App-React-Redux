import firebase from 'firebase'
var config = {

  //Your api
};

  
export const fire = firebase.initializeApp(config);
export const firebaseSignOut=fire.auth(); 
export const database=fire.database().ref('/');
