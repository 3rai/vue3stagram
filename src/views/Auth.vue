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
import db from 'firebase' 
// データベース

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
        .then((result) => {
          alert('Create account: ' + result.user.displayName)
          this.$store.commit('setIsLoggedIn', true);
          const userData = {
            id: result.user.uid,
            userName: result.additionalUserInfo.profile.given_name,
            mail: result.additionalUserInfo.profile.email,          
          }
          console.log(userData)
          db.firestore().collection('users').doc(result.user.uid).set(userData)
          this.$store.commit('setUserInfo', userData.userName);
          this.$router.push('/')
        })
        .catch(error => alert(error.message))
    }
  }
}


</script>