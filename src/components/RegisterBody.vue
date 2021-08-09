<template>
  <div class="reg-body">
    <div v-if="step === 1" class="feed" v-dragscroll.y>
      <!--<post v-for="post in posts" :post="post" :key="posts.indexOf(post)"></post>-->
      <h1>ニックネームとプロフィール画像を設定できます</h1>
      <div class="reg-nickname">
        <button @click="this.$store.commit('setStep', 2)"><img src="@/assets/reg_nickname.png" alt="register_nickname" width="250" height="50"/></button>
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
    <div v-if="step === 4">
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
    </div>
  </div>
</template>


<script>
//import Post from "./Post";
//import FilterType from "./FilterType";

export default {
  name: "RegisterBody",
  components: {
    //post: Post,
    //"filter-type": FilterType
  },
  computed: {
    step(){
      return this.$store.getters.getStep;
    },
    posts(){
      return this.$store.getters.getPosts;
    },
    filters(){
      return this.$store.getters.getFilters;
    },
    image(){
      return this.$store.getters.getUploadImage;
    },
    selectedFilter(){
      return this.$store.getters.getSelectedFilters;
    },
    caption(){
      return this.$store.getters.getInputCaption;
    }
  },
  created(){
    this.$store.dispatch('initPostData');
  },
  methods: {
    uploadImage(evt) {
      const files = evt.target.files;
      if(!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = evt => {
        this.$store.commit('setUploadImage', evt.target.result);
        this.$store.commit('setStep', 3);
      };
      document.querySelector("#file").value = "";
    },
  }
};
</script>
.reg-body {
  height: 100%;
}
<style>
h1{
  text-align: center;
  margin: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
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

div[class$="reg-"]:hover{

}
.reg-nickname button{
  width: 100%;
  margin: 5px;
  background: none;
  border: 0;
  overflow: visible;
  cursor: pointer;
  text-align: center;
}
.reg-profileimage button{
  width: 100%;
  margin: 5px;
  background: none;
  border: 0;
  overflow: visible;
  cursor: pointer;
  text-align: center;
}
.feed .reg-profileimage p {
  font-size: 0.63rem;
  position: absolute;
  left: -25px;
  top: 5px;
}

.reg-footer label {
  cursor: pointer;
  z-index: 99;
}
.reg-parameter button{
  width: 100%;
  margin: 5px;
  background: none;
  border: 0;
  overflow: visible;
  cursor: pointer;
  text-align: center;
}
.parameter-name p{
  text-align: center;
  margin: 10px;
  padding-top: 15px;
}
.parameter-sel p{
  text-align: center;
  margin: 5px;
}
.selected-parameter select{
  width: 70%;
  cursor: pointer;
}
.reg-fin button{
  width: 100%;
  margin: 5px;
  background: none;
  border: 0;
  overflow: visible;
  cursor: pointer;
  text-align: center;
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