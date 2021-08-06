<template>
  <div id="mypage">
    <h1>Profile</h1>
    <div class="user-info">
      <div class="photo1">
        <img src="@/assets/S__835622.jpg">
      </div>
      <h2>name</h2>
      <p>根本</p>
      <h2>comment</h2>
      <p>
        あいうえおかきちつてと
      </p>
    </div>
  
  <div class="pictures">
    <img src="@/assets/S__835622.jpg">
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
          "picture":"@/assets/S__835622.jpg"
        }, 
        "two":{
          "picture":"@/assets/S__835622.jpg"
        }, 
        "three":{
          "picture":"@/assets/S__835622.jpg"
        }, 
        "four":{
          "picture":"@/assets/S__835622.jpg"
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
  color: white;
  background: #816071;
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
  text-align: left;
  width: 100px;
  height: 100px;
  /* text-align:center */
}


p{
  text-align: left;
}

.pictures{
  text-align: left;
  width: 100px;
  height: 100px;
}

</style>