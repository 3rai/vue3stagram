<template>
  <div class="contribution">
    <div class="phone-header">
      <img src="@/assets/okashilogo.png">
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
        </div>
        <div v-if="uploadImage!=null" class="slected-image">
          <img :src="uploadImage"/>
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
  name: 'Contribution',
  components: {
    Footer

  },
  data(){
    return{
      nickname: "",
      uploadImage: null,
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
        this.uploadImage = evt.target.result;
        //this.$store.commit('setUploadImage', evt.target.result);
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

.feed {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
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