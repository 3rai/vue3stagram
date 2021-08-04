<template>
  <div class="auth">
    <!--<h1>This is an login page</h1>-->
    <div class = "logo">
      <img src="@/assets/okashilogo.png">
    </div>
    <button @click="signUp">signIn</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default{
  name: 'Signup',
  data () {
    return {
    }
  },
  methods: {
    signUp: function () {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(obj => {
          alert('Create account: ' + obj.user.displayName)
          this.$store.commit('setIsLoggedIn', true);
          this.$router.push('/')
        })
        .catch(error => alert(error.message))
    }
  }
}



</script>