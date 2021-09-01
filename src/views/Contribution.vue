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
              @change="UploadImage"
              :disabled="step !== 1"
            >ファイルを選択
          </label>
        </div>
        <div v-if="uploadImage!=null" class="selected-image">
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
          <button @click="sharePost">投稿</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//import firebase from 'firebase'
import Footer from "@/components/Footer.vue";
import db from 'firebase' ;
export default{
  name: 'Contribution',
  components: {
    Footer

  },
  data(){
    return{
      uploadImage: null,
      place: "",
      comment: "",
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

    //ファイルマネージャー開いて画像を選択してもらう？
    UploadImage(evt){
      const files = evt.target.files;
      if(!files.length) return;
      this.uploadfile = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadfile);
      reader.onload = evt => {
        this.uploadImage = evt.target.result;
        console.log(evt);
        //this.$store.commit('setUploadImage', evt.target.result);
        //this.$store.commit('setStep', 2);
      };
      document.querySelector("#file").value = "";
    },
    //投稿シェア
    sharePost() {
      const postData = {     //firestoreのフィールド管理（追加可能）
        username: this.$store.state.user.userName,
        userId: this.$store.state.user.id,
        userImage: "https://api.adorable.io/avatars/285/abott@adorable.png",
        postImage: this.uploadImage,
        likes: 0,
        caption: this.comment,
        place: this.place
        //filter: this.state.selectedFilter
      };
      db.firestore().collection('posts').doc().set(postData);
      this.$router.push('/');
    },
    //ログアウトは使わない
    logout(){
      this.$store.dispatch('logout');
      this.$store.push('/auth');
    },
    //使わない
    check(){
      this.$store.push('/')
      console.log(
        this.uploadImage,
        this.place,
        this.comment
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
  /* background-repeat: no-repeat;
  background-size: cover;
  background-position: center center; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  max-width: 70%;
  max-height: 500px;
  padding: 30px;
}
.selected-image img{
  width: auto;
  height: 100%;
  object-fit: cover;
}
.share button{
  /* margin-bottom: 500px; */
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