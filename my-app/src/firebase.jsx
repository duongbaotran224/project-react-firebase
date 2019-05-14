import * as firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDcWOmhvl0LsDVTK2XyaXUWMQ8xCuKJpuM",
    authDomain: "react-redux-firebase-74ac1.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-74ac1.firebaseio.com",
    projectId: "react-redux-firebase-74ac1",
    storageBucket: "react-redux-firebase-74ac1.appspot.com",
    messagingSenderId: "237013801545",
    appId: "1:237013801545:web:5a2c63710028542e"
  };
  // Initialize Firebase
export const firebaseConnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref('blogs_list/blog1');
// data.once('value') .then(function(snapshot) {
//   console.log('a', snapshot)
// });
data.set({
  id: 4,
  title: 'Title 1',
  description: 'ahihi..'
})
