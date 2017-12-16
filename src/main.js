import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui';

import router from './router'
Vue.use(VueRouter)

export const config = {
  apiKey: "-----------",
  authDomain: "-----------",
  databaseURL: "-----------",
  projectId: "-----------",
  storageBucket: "-----------",
  messagingSenderId: "-----------"
};

new Vue({
  router,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
      }
     });
    },
  el: '#app',
  render: h => h(App)
});

Vue.config.productionTip = false