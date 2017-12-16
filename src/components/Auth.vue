<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>

<style lang="css">
@import url(https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css);
</style>