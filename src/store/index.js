import { createStore } from 'vuex'
// mock data
import mock_posts from "@/data/posts";
import mock_filters from "@/data/filters";

export default createStore({
  state: {
    /* 全体の状態 */
    step: 1,  // 画面状態
    posts: mock_posts, // 投稿データ(ここではjsonを読み込んでいるが，DB連係できると良い)
    filters: mock_filters, // 投稿前のフィルター情報
    /* 投稿情報 */
    uploadImage: "",
    selectedFilter: "",
    inputCaption: ""
  },
  getters: {
    getStep(state){
      return state.step;
    },
    getPosts(state){
      return state.posts;
    },
    getFilters(state){
      return state.filters;
    },
    getUploadImage(state){
      return state.uploadImage;
    },
    getSelectedFilters(state){
      return state.selectedFilter;
    },
    getInputCaption(state){
      return state.inputCaption;
    }
  },
  mutations: {
    setStep(state, data){
      state.step = data;
    },
    setPosts(state, data){
      state.posts = data;
    },
    addPosts(state, data){
      state.posts.unshift(data);
    },

    setUploadImage(state, data){
      state.uploadImage = data;
    },
    setSelectedFilter(state, data){
      state.selectedFilter = data;
    },
    setInputCaption(state, data){
      state.inputCaption = data;
    }
  },
  actions: {
    resetStepAction(context){
      context.commit('setStep', 1);
      context.commit('setUploadImage', "");
      context.commit('setSelectedFilter', "");
      context.commit('setInputCaption', "");
    },
    sharePostAction(context){
      const postData = {
        username: "webmaster95",
        userImage: "https://api.adorable.io/avatars/285/abott@adorable.png",
        postImage: this.state.uploadImage,
        likes: 0,
        caption: this.state.inputCaption,
        filter: this.state.selectedFilter
      };
      context.commit('addPosts', postData);
    }
  },
  modules: {
  }
})
