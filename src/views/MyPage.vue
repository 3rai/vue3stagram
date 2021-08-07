<template>
  <div id="mypage">
    <div class="profile">
      <h1>Profile</h1>
      <div class="user-info">
        <div class="photo1">
          <img src="@/assets/S__852356.jpg">
        </div>
        <h2>name</h2>
        <p>根本</p>
        <h2>comment</h2>
        <p>
          あいうえおかきちつてと
        </p>
      </div>
    </div>

    <div id="main">
      <div class="pictures" v-for="test,index in testarray" :key="index">
        <img v-bind:src="test.picture">
      </div>
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
          "picture":"/img/S__835622.5651814a.jpg"
        }, 
        "two":{
          "picture": "/img/S__835622.5651814a.jpg"
        }, 
        "three":{
          "picture": "/img/S__835622.5651814a.jpg"
        }, 
        "four":{
          "picture": "/img/S__835622.5651814a.jpg"
        },
        "five":{
          "picture": "/img/S__835622.5651814a.jpg"
        },
        "six":{
          "picture": "/img/S__835622.5651814a.jpg"
        },
        "seven":{
          "picture": "/img/S__835622.5651814a.jpg"
        },
        "eight":{
          "picture": "/img/S__835622.5651814a.jpg"
        },
        "nine":{
          "picture": "/img/S__835622.5651814a.jpg"
        },
        "ten":{
          "picture": "/img/S__835622.5651814a.jpg"
        },
        "eleven":{
          "picture": "/img/S__835622.5651814a.jpg"
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
  font-size: 50px;
  /* フォントが変わらん */
  font-family: 'メイリオ', Meiryo,'ヒラギノ角ゴシック','Hiragino Sans','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
}

.user-info{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

h2{
  text-align: center;
  padding-left: 10px;
}

.photo1 {
  width: 200px;
  height: 200px;
  object-fit: cover;
  /* border-radius: 50%; */
}

/* p{
  text-align: left;
} */

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
  /* justify-content: space-between; */
}

.pictures{
  width: 31%;
  height: auto;
  margin-bottom: 3%;
} 

</style>