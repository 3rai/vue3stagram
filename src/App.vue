<template>
  <div id="main">
    <div class="app-phone">
      <div class="phone-header">
        <img src="./assets/vuestagram.png">
        <a class="cancel-cta" v-if="step === 2 || step === 3" @click="goToHome">Cancel</a>
        <a class="next-cta" v-if="step === 2" @click="step++">Next</a>
        <a class="next-cta" v-if="step === 3" @click="sharePost">Share</a>
      </div>
      <phone-body
        :step="step"
        :posts="posts"
        :filters="filters"
        :image="image"
        :selectedFilter="selectedFilter"
        v-model="caption"
      />
      <div class="phone-footer">
        <div class="home-cta" @click="goToHome">
          <i class="fas fa-home fa-lg"></i>
        </div>
        <div class="upload-cta">
          <input
            type="file"
            name="file"
            id="file"
            class="inputfile"
            @change="uploadImage"
            :disabled="step !== 1"
          >
          <label for="file">
            <i class="far fa-plus-square fa-lg"></i>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "./utils/event-bus.js";
import PhoneBody from "./components/PhoneBody";
export default {
  name: "App",
  data() {
    return {

    };
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
  created() {
    EventBus.$on("filter-selected", evt => {
      this.selectedFilter = evt.filter;
    });
  },
  methods: {
    goToHome() {
      this.$store.dispatch('resetStepAction');
    },
    uploadImage(evt) {
      const files = evt.target.files;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = evt => {
        this.image = evt.target.result;
        this.$store.commit('setStep', 2);
      };
      // To enable reuploading of same files in Chrome
      document.querySelector("#file").value = "";
    },
    sharePost() {
      this.$store.dispatch('sharePostAction');
      this.goToHome();
    }
  },
  components: {
    "phone-body": PhoneBody
  }
};
</script>

<style>
html,
body,
#main {
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: #e6ecf1;
  font-family: "Roboto", sans-serif;
}

#main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-phone {
  background-color: white;
  height: 620px;
  width: 375px;
  overflow: hidden;
}

.phone-header {
  height: auto;
  width: 375px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: #fafafa;
  border-bottom: 1px solid #eeeeee;
  z-index: 99;
}
.phone-header img {
  max-width: 120px;
  display: block;
  margin: 0 auto;
  padding-top: 1px;
}
.phone-header .cancel-cta,
.phone-header .next-cta {
  position: absolute;
  top: 12px;
  color: #209cee;
  font-weight: bold;
  cursor: pointer;
}
.phone-header .cancel-cta {
  left: 10px;
}
.phone-header .next-cta {
  right: 10px;
}

.feed {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-right: -15px;
}

.caption-container {
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.caption-container textarea {
  border: 0;
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
}
.caption-container textarea:focus {
  outline: 0;
}

.selected-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 330px;
}

.phone-footer {
  height: 35px;
  width: 375px;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  background: #fafafa;
  border-top: 1px solid #eeeeee;
  z-index: 99;
}
.phone-footer .home-cta {
  position: absolute;
  left: 10px;
  top: 6px;
  cursor: pointer;
}
.phone-footer .upload-cta {
  position: absolute;
  right: 10px;
  top: 6px;
}
.phone-footer .upload-cta p {
  font-size: 0.63rem;
  position: absolute;
  left: -25px;
  top: 5px;
}
.phone-footer input[name=file] {
  visibility: hidden;
}
.phone-footer label {
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
  #app {
    height: 100% !important;
    padding-top: 0 !important;
  }

  .app-phone,
.app-phone-scroll-cover {
    height: 100%;
    width: 100%;
  }

  .phone-header,
.phone-footer {
    width: 100%;
  }
}
@media (max-height: 520px) {
  .app-phone {
    transform: scale(0.6);
  }
}
</style>
