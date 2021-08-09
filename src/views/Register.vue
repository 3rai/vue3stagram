<template>
  <div class = "register">
    <div class="reg">
      <div class="reg-header">
        <img src="@/assets/okashilogo.png">
        <!--stepが切り替わることでBodyの内容も切り替わる-->
        <a class="cancel-cta" v-if="step === 2 || step === 3" @click="goToHome">Cancel</a>
        <a class="next-cta" v-if="step === 2 || step === 3" @click="goToHome">Done</a>
      </div>
      <!--Body部分RegisterBodyで内容記述-->
      <reg-body
        v-model="caption"
      />
      <div class="reg-footer">
        <!--
        <div class="reg-cta">
          ファイルマネージャー開く
          <input
            type="file"
            name="file"
            id="file"
            class="inputfile"
            @change="uploadImage"
            :disabled="step !== 1"
          >
          設定アイコン
          <label for="file">
            <i class="fas fa-cog fa-lg"></i>
          </label>
        </div>
        -->
      </div>
    </div>
  </div>

  <Footer />

</template>

<script>
//RegisterBody.vueから読み込む
import RegisterBody from "@/components/RegisterBody";
import Footer from "@/components/Footer.vue";
export default{
  name: 'Register',
  components: {
    "reg-body": RegisterBody,
    Footer
  },
  computed: {
    //stepを移動
    step(){
      return this.$store.getters.getStep;
    },
    //Body部分の何か
    caption(){
      return this.$store.getters.getInputCaption;
    }
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
    uploadImage(evt){
      const files = evt.target.files;
      if(!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = evt => {
        this.$store.commit('setUploadImage', evt.target.result);
        this.$store.commit('setStep', 2);
      };
      document.querySelector("#file").value = "";
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
    }
  }
}
</script>
<style>
.reg {
  background-color: white;
  height: 620px;
  width: 375px;
  overflow: hidden;
}

.reg-header {
  height: auto;
  width: 375px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: #fafafa;
  border-bottom: 1px solid #eeeeee;
  z-index: 99;
}
.reg-header img {
  max-width: 150px;
  display: block;
  margin: 0 auto;
  padding-top: 6px;
  padding-bottom: 6px;
}
.reg-header .cancel-cta,
.reg-header .next-cta {
  position: absolute;
  top: 12px;
  color: #209cee;
  font-weight: bold;
  cursor: pointer;
}
.reg-header .cancel-cta {
  left: 10px;
}
.reg-header .next-cta {
  right: 10px;
}
.reg-body{
  height: 514.6px;
}
.feed {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-right: -15px;
}

.name-container {
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.name-container textarea {
  border: 0;
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
}
.name-container textarea:focus {
  outline: 0;
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