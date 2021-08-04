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
        .then(obj => {
          //データベースに登録
          const userData = {
            mail: result.additionalUserInfo.profile.mail,
            userName: result.additionalUserInfo.profile.given_userName,
          }
          alert('Create account: ' + obj.user.displayName)
          this.$store.commit('setIsLoggedIn', true);
          console.log(userData)
          db.firestore().collection('users').doc(result.user.uid).set(userData)
          this.$router.push('/')
        })
        .catch(error => alert(error.message))
    }
  }
}


</script>