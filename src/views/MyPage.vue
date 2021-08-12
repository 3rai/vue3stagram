<template>
  <div class="mypage">
    <div class="phone-header">
      <img src="@/assets/okashilogo.png">
    </div>
    <div class="mypage-body">
      <div class="profile">
        <!--<h1>マイページ</h1>-->
        <div class="user-info">
          <div class="photo1">
            <img src="@/assets/S__884742.jpg" />
          </div>
          <h2>なまえ</h2>
          <p1>もりもと</p1>
          <!-- <p class="-nal3 " >フォロー<span class="g47SY " >5万</span>人</p>
          <p class="-nal3 " >フォロワー<span class="g47SY " >3万</span>人</p> -->
          <h2>ひとこと</h2>
          <p2>
            はじめまして。
            甘いお菓子が好きです。スナック菓子もよく買います。
          </p2>
        </div>
      </div>
      <div id="main">
        <div
          class="pictures"
          v-for="(test, index) in testarray"
          :key="index"
        >
          <img v-bind:src="test.picture" />
        </div>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "mypage",
  components: {
    Footer
  },
  data() {
    return {
      testarray: {
        one: {
          picture: require("@/assets/S__884742.jpg"),
        },
        two: {
          picture: require("@/assets/S__884744.jpg"),
        },
        three: {
          picture: require("@/assets/S__884745.jpg"),
        },
        four: {
          picture: require("@/assets/S__884746.jpg"),
        },
        five: {
          picture: require("@/assets/S__884747.jpg"),
        },
        six: {
          picture: require("@/assets/S__884748.jpg"),
        },
        seven: {
          picture: require("@/assets/S__892931.jpg"),
        },
        eight: {
          picture: require("@/assets/S__892933.jpg"),
        },
        nine: {
          picture: require("@/assets/S__892934.jpg"),
        },
        // ten: {
        //   picture: require("@/assets/S__835622.jpg"),
        // },
        // eleven: {
        //   picture: require("@/assets/S__835622.jpg"),
        // },
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.mypage {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.phone-header {
  width: 100%;
  height: 100px;
  background: #ebd160;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.phone-header img {
  max-width: 250px;
}
.profile{
  position: relative;
}
/* h1 {
  color: rgb(82, 74, 7);
  background: #f0d069;
  text-align: center;
  font-size: 30px;
  margin: 0;
  margin-bottom: 10px;
  font-family: "メイリオ", Meiryo, "ヒラギノ角ゴシック", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif;
} */


.user-info {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

h2 {
  font-size: 20px;
  text-align: center;
  padding-left: 10px;
  margin-top: 5px;
  text-decoration: underline;
  text-decoration-color: #849e26;
}

.photo1 {
  position: relative;
  width: 200px;
  height: 200px;
  /* border-radius: 50%; */
}

.photo1 img {
  border-radius: 50%;
}

.photo1 img{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#main img{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p1 {
  font-size: 30px;
  margin-left: 20%;
  margin-right: 20%;
}

p2 {
  font-size: 20px;
  margin-left: 20%;
  margin-right: 20%;
}

#main {
  width: 100%;
  display: flex;
  gap: 0 3.5%;
  flex-wrap: wrap;
  /* overflow: scroll;  */
  /* height: 100vh;  */
  background: #dfd9c7;
  margin-top: 30px;
  /* justify-content: space-between; */
  /* justify-content: space-around; */
}

.pictures {
  position: relative;
  width: 31%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pictures::before{
  content: "";
  padding-top: 100%;
  display: block;
}

</style>