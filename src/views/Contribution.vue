<template>
  <div class="contribution">
    <div class="contribution-header">
      <img src="@/assets/okashilogo.png"/>
    </div>
    <div class="contribution-body">
      <div v-if="step === 1" class="feed" v-dragscroll.y>
        <div class="description">
          投稿しよう
        </div>
        <div class="item profileimage">
          <p>投稿画像</p>
          <label class="inputfile">
            <input
              type="file"
              name="file"
              id="file"
              @change="uploadProfileImage"
              :disabled="step !== 1"
            >ファイルを選択
          </label>
          <div
          class="selected-image"
          :class="selectedFilter"
          :style="{ backgroundImage: 'url(' + image + ')' }"
          ></div>
        </div>
        <div class="item nickname">
          <p>販売場所</p>
          <input class="place" type="text" v-model="place"/>
        </div>
        <div class="item nickname">
          <p>コメント</p>
          <input class="comment" type="text" v-model="comment"/>
        </div>
        <div class="share">
          <button @click="check; sharePost">次へ</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default{
  name: 'Register',
  components: {
    Footer

  },
  data(){
    return{
      nickname: "",
      profileimage: null,
    }
  },
  computed: {
    //stepを移動
    step(){
      return this.$store.getters.getStep;
    },
    //Body部分の何か
    caption(){
      return this.$store.getters.getInputCaption;
    },
    image(){
      return this.$store.getters.getUploadImage;
    },
  },
  //
  created(){
    this.$store.dispatch('initPostData');
  },
  methods:{

    //Registerの初期画面に移動にしたい＝atep===1に移動
    goToHome(){
      this.$store.dispatch('resetStepAction');
    },

    //ファイルマネージャー開いて画像を選択してもらう？ここでは使わない
    uploadProfileImage(evt){
      const files = evt.target.files;
      if(!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = evt => {
        this.$store.commit('setUploadImage', evt.target.result);
        //this.$store.commit('setStep', 2);
      };
      document.querySelector("#file").value = "";
    },
    //投稿シェア
    sharePost() {
      this.$store.dispatch('sharePostAction');
      this.goToHome();
    },
    //Homeに移動は使わない
    register_fin(){
      //this.$store.dispatch('sharePostAction');
      this.$router.push('/')
    },
    //ログアウトは使わない
    logout(){
      this.$store.dispatch('logout');
      this.$store.push('/auth');
    },
    check(){
      console.log(
        this.nickname,
        this.profileimage
      )
    }
  }
}
</script>

<style>
.contribution{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contribution-header {
  height: auto;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: #ebd160;
  border-bottom: 1px solid #eeeeee;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contribution-header img {
  max-width: 250px;
  display: block;
  margin: 0 auto;
  margin-bottom: 2%;
  padding-top: 1px;
}

.description{
  padding: 30px;
}

.item{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.inputfile input[type="file"]{
  display: none;
}
.inputfile{
  background-image: url("/static/reg_profileimage.png");
  cursor: pointer;
  padding: 5px;
}
.selected-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 330px;

}
.reg-footer {
  height: 35px;
  width: 375px;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  background: #fafafa;
  border-top: 1px solid #eeeeee;
  z-index: 99;
}
.reg-footer .reg-cta {
  position: absolute;
  right: 10px;
  top: 6px;
}
.reg-footer .reg-cta p {
  font-size: 0.63rem;
  position: absolute;
  left: -25px;
  top: 5px;
}
.reg-footer input[name=file] {
  visibility: hidden;
}
.reg-footer label {
  cursor: pointer;
  z-index: 99;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-leave-to {
  opacity: 0;
}

@media (max-width: 520px) {
  .app-phone, .app-phone-scroll-cover {
    height: 100%;
    width: 100%;
  }

  .phone-header, .phone-footer {
    width: 100%;
  }
}
@media (max-height: 520px) {
  .app-phone {
    transform: scale(0.6);
  }
}
</style>