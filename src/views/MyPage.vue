<template>
  <div id="mypage">
    <div class="profile">
      <h1>Profile</h1>
      <div class="user-info">
        <div class="photo1">
          <img src="@/assets/S__852356.jpg">
        </div>
        <h2>name</h2>
        <p1>根本</p1>
        <h2>comment</h2>
        <p2>
          はじめまして。こんにちは。こんばんわ。あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </p2>
      </div>
    </div>

    <div id="main">
      <div class="pictures" v-for="test,index in testarray" :key="index">
        <img v-bind:src="test.picture">
      </div>
    </div>

    <ul id="nav">
      <li><a href="http://localhost:8080/">HOME</a></li>
      <li><a href="http://localhost:8080/MyPage">MYPAGE</a></li>
      <li><a href="#">MENU3</a></li>
    </ul>

    <div class="home-cta" >
          <i class="fas fa-home fa-lg"></i>
    </div>

  </div>

</template>

<script>
export default{
  name: 'mypage',
  data () {
    return {
      testarray:{
        "one":{
          "picture": require("@/assets/S__884742.jpg")
        }, 
        "two":{
          "picture": require("@/assets/S__884744.jpg")
        }, 
        "three":{
          "picture": require("@/assets/S__884745.jpg")
        }, 
        "four":{
          "picture": require("@/assets/S__884746.jpg")
        },
        "five":{
          "picture": require("@/assets/S__884747.jpg")
        },
        "six":{
          "picture": require("@/assets/S__884748.jpg")
        },
        "seven":{
          "picture": require("@/assets/S__892931.jpg")
        },
        "eight":{
          "picture": require("@/assets/S__892933.jpg")
        },
        "nine":{
          "picture": require("@/assets/S__892934.jpg")
        },
        "ten":{
          "picture": require("@/assets/S__835622.jpg")
        },
        "eleven":{
          "picture": require("@/assets/S__835622.jpg")
        }
      }
    }
  },
  methods: {
    
  }
}



</script>

<style scoped>

#mypage{
  width: 100%;
  display: flex;
  flex-direction: column;
}

h1{
  color: rgb(82, 74, 7);
  background: #f0d069;
  text-align:center;
  font-size: 30px;
  margin-bottom: 10px;
  font-family: 'メイリオ', Meiryo,'ヒラギノ角ゴシック','Hiragino Sans','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
}

.user-info{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

h2{
  font-size: 20px;
  text-align: center;
  padding-left: 10px;
  margin-top: 5px;
  text-decoration:underline;
  text-decoration-color:#849e26;
}

.photo1 {
  width: 200px;
  height: 200px;
  /* border-radius: 50%; */
}

.photo1 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

#main img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p1{
  font-size: 30px;
  margin-left: 20%;
  margin-right: 20%;
}

p2{
  font-size: 20px;
  margin-left: 20%;
  margin-right: 20%;
}

#main{
  width: 90%;
  display: flex;
  gap: 0 3.5%;
  flex-wrap: wrap;
  /* overflow: scroll;  */
  /* height: 100vh;  */
  margin-left: auto;
  margin-right: auto;
  background: #dfd9c7;
  margin-top: 30px;
  /* justify-content: space-between; */
}

.pictures{
  width: 31%;
  height: auto;
  margin-bottom: 3%;
} 

#nav {
  list-style: none;
}
 
#nav li {
  width: 140px;
  text-align: center;
}
 
#nav {
  list-style: none;
  overflow: hidden;
  position: fixed;
  width: 100%;
  bottom: 0;
}
 
#nav li {
  width: 33.3%;
  text-align: center;
  background-color: rgb(223, 162, 72);
  float: left;
  height: 50px;
  line-height: 50px;
  /* margin-right: 2px; */
}
 
#nav li a {
  text-decoration: none;
  color: rgb(253, 251, 244);
  font-weight: bold;
  padding: 20px;
}

.home-cta {
  height: 35px;
  position: sticky;
}


</style>