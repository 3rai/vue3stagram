<template>
  <div class = "register">
    <div class="reg-header">
      <img src="@/assets/okashilogo.png">
    </div>
    <!--Body部分RegisterBodyで内容記述-->
    <div class="reg-body">
      <div v-if="step === 1" class="feed" v-dragscroll.y>
        <div class="description">
          ニックネームとプロフィール画像を設定できます
        </div>
        <div class="reg-nickname">
          <p>ニックネーム</p>
          <input class="nickname-form" type="text" v-model="nickname"/>
        </div>
        <div class="reg-profileimage">
          <input
            type="file"
            name="file"
            id="file"
            class="inputfile"
            @change="uploadImage"
            :disabled="step !== 1"
          >
          <label for="file">
            <img src="@/assets/reg_profileimage.png" alt="register_profile" width="250" height="50"/>
          </label>
        </div>
        <div class="reg-parameter">
          <button @click="this.$store.commit('setStep', 4)"><img src="@/assets/reg_parameter.png" alt="register_profile" width="250" height="50"/></button>
        </div>
        <div class="reg-fin">
          <button @click="this.$router.push('/')"><img src="@/assets/reg_finish.png" alt="register_finish" width="250" height="50"/></button>
        </div>
      </div>
      <div v-if="step === 3">
        <div
          class="selected-image"
          :class="selectedFilter"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
        <!--
        <div class="filter-container" v-dragscroll.x>
          <filter-type
            v-for="filter in filters"
            :filter="filter"
            :image="image"
            :key="filters.indexOf(filter)"
          ></filter-type>
        </div>
        -->
      </div>
      <div v-if="step === 2">
        <!--
        <div
          class="selected-image"
          :class="selectedFilter"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
        -->
        <div class="name-container">
          <textarea
            class="name-input"
            placeholder="Write your nickname..."
            type="text"
            :value="value"
            @input="$emit('input', $event.target.value)"
          ></textarea>
        </div>
      </div>
    
    </div>

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
</template>

<script>
export default{
  name: 'Register',
  components: {

  },
  data(){
    return{
      nickname: "",
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
.register{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.reg-header {
  height: 100px;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: #fafafa;
  border-bottom: 1px solid #eeeeee;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
.reg-header img {
  max-width: 150px;
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