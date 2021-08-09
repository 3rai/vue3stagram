<template>
  <div class="auth">
    <!--<h1>This is an login page</h1>-->
    <div class = "logo">
      <img src="@/assets/okashilogo.png" width = "500" height="100"/>
    </div>
    <div class = "login_button">
      <button @click="signUp"><img src = "@/assets/login_button.png" alt = "login_button" width = "260" height="50"/></button>
    </div>
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
          this.$store.commit('setUserInfo', {userName: userData.userName, userId: userData.id});
          this.$router.push('/')
        })
        .catch(error => alert(error.message))
    }
  }
}



</script>

<style>

.logo img{
  margin: 60px;
}

.login_button button{
  width: 100%;
  margin: 5px;
  background: none;
  border: 0;
  overflow: visible;
  cursor: pointer;
  text-align: center;
}
</style>
