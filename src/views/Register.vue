<template>
  <div class = "register">
    <div class="phone-header">
      <img src="@/assets/okashilogo.png">
    </div>
    <!--Body部分RegisterBodyで内容記述-->
    <div class="reg-body">
      <div v-if="step === 1" class="feed" v-dragscroll.y>
        <div class="description">
          ニックネームとプロフィール画像を設定できます
        </div>
        <div class="item nickname">
          <p>ニックネーム</p>
          <input class="nickname-form" type="text" v-model="nickname"/>
        </div>
        <div class="item profileimage">
          <p>プロフィール画像</p>
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
        <div v-if="profileimage!=null" class="selected-image">
          <img :src="profileimage"/>
        </div>
        <div class="next">
          <button @click="check">次へ</button>
        </div>
      </div>
      <div v-if="step === 2" class="feed" v-dragscroll.y>
        <div class="description">
          パラメータを設定できます
        </div>
        <div class="selected-parameter">
          <div class="parameter-name">
            <p>種類</p>
          </div>
          <div class="parameter-sel">
            <p>
              <select name="parameter-type">
                <option value="" hidden>選択してください</option>
                <option value="和菓子" disabled>和菓子</option>
                <option value="もちもの">もちもの</option>
                <option value="蒸し物">蒸し物</option>
                <option value="練り物">練り物</option>
                <option value="あんもの">あんもの</option>
                <option value="焼き物">焼き物</option>
                <option value="豆菓子">豆菓子</option>
                <option value="米菓子">米菓子</option>
                <option value="あめもの">あめもの</option>
                <option value="揚げ物">揚げ物</option>
                <option value="洋菓子" disabled>洋菓子</option>
                <option value="スポンジケーキ類">スポンジケーキ類</option>
                <option value="バターケーキ類">バターケーキ類</option>
                <option value="シュー菓子">シュー菓子</option>
                <option value="タルト類">タルト類</option>
                <option value="ワッフル類">ワッフル類</option>
                <option value="パイ類">パイ類</option>
                <option value="キャンデー類">キャンデー類</option>
                <option value="チョコレート類">チョコレート類</option>
                <option value="チューインガム類">チューイングガム類</option>
                <option value="ビスケット類">ビスケット類</option>
                <option value="スナック類">スナック類</option>
              </select>
            </p>
          </div>
          <div class="parameter-name">
            <p>味</p>
          </div>
          <div class="parameter-sel">
            <p>
              <select name="parameter-taste">
                <option value="" hidden>選択してください</option>
                <option value="酸っぱい">酸っぱい</option>
                <option value="甘酸っぱい">甘酸っぱい</option>
                <option value="甘い">甘い</option>
                <option value="甘さ控えめ">甘さ控えめ</option>
                <option value="激甘">激甘</option>
                <option value="甘辛">甘辛・甘じょっぱい</option>
                <option value="辛い">辛い</option>
                <option value="激辛">激辛</option>
                <option value="塩気">塩気</option>
                <option value="塩分控えめ">塩分控えめ</option>
                <option value="苦い">苦い</option>
                <option value="香ばしい">香ばしい</option>
                <option value="フルーティ">フルーティ</option>
                <option value="スパイシー">スパイシー</option>
                <option value="スモーキー">スモーキー</option>
                <option value="その他(味)">その他</option>
              </select>
            </p>
          </div>
          <div class="parameter-name">
            <p>食感</p>
          </div>
          <div class="parameter-sel">
            <p>
              <select name="parameter-texture">
                <option value="" hidden>選択してください</option>
                <option value="もちもち">もちもち</option>
                <option value="ジューシー">ジューシー</option>
                <option value="トロトロ">トロトロ</option>
                <option value="サクサク">サクサク</option>
                <option value="ふわふわ">ふわふわ</option>
                <option value="ふわトロ">ふわトロ</option>
                <option value="なめらか">なめらか</option>
                <option value="カリカリ">カリカリ</option>
                <option value="パリパリ">パリパリ</option>
                <option value="サクふわ">サクふわ</option>
                <option value="サクトロ">サクトロ</option>
                <option value="弾力">弾力</option>
                <option value="しっとり">しっとり</option>
                <option value="その他(食感)">その他</option>
              </select>
            </p>
          </div>
          <div class="parameter-name">
            <p>性格</p>
          </div>
          <div class="parameter-sel">
            <p>
              <select name="parameter-chara">
                <option value="" hidden>選択してください</option>
                <option value="上品">上品</option>          
                <option value="贅沢">贅沢</option>          
                <option value="可愛い">可愛い</option>          
                <option value="大人">大人</option>          
                <option value="ヘルシー">ヘルシー</option>          
                <option value="無添加">無添加</option>          
                <option value="季節限定">季節限定</option>          
                <option value="定番">定番</option>          
                <option value="伝統">伝統</option>          
                <option value="その他(性格)">その他</option>
              </select>
            </p> 
          </div>
        </div> 
        <button @click="this.$store.commit('setStep', 1)">戻る</button>
      </div>
    </div>
  </div>

  <Footer />

</template>

<script>
//import RegisterBody from "@/components/RegisterBody";
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
    /* image(){
      return this.$store.getters.getUploadImage;
    }, */
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
        this.profileimage = evt.target.result;
        //this.$store.commit('setStep', 2);
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
    },
    check(){
      this.$store.commit('setStep', 2);
      console.log(
        this.nickname,
        this.profileimage
      )
    }
  }
}
</script>

<style scoped>
.register{
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
  position: relative;
  width: 200px;
  height: 200px;
  margin: 10px;
}
.selected-image img {
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