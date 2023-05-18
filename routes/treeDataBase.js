const firebase = require ('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyBf89NKw77fwaaKpcgSeguHev1WznVuSaQ",
    authDomain: "treedata-f8db8.firebaseapp.com",
    projectId: "treedata-f8db8",
    storageBucket: "treedata-f8db8.appspot.com",
    messagingSenderId: "1021338791018",
    appId: "1:1021338791018:web:d22e06170775d866ac2e13",
    measurementId: "G-4YQT7EC2G2"
  };
  
  firebase.initializeAoo(firebaseConfig);

  const dbTrees = firebase.firestore();
  const trees = dbTrees.collection("Trees");
  module.exports = trees;
