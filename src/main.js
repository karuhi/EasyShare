import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC7ar8f743wek020rSMWXZoSA0agof9efs",
    authDomain: "easysharedb.firebaseapp.com",
    databaseURL: "https://easysharedb.firebaseio.com",
    projectId: "easysharedb",
    storageBucket: "easysharedb.appspot.com",
    messagingSenderId: "513542197183"
};
firebase.initializeApp(config);

new Vue({
    render: function(h) { return h(App) },
}).$mount('#app')