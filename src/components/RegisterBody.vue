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
          <button><img src="@/assets/reg_profileimage.png" alt="register_profile" width="250" height="50"/></button>
        </label>
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