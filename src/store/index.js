import { createStore } from 'vuex'
// mock data
//import mock_posts from "@/data/posts";
import mock_filters from "@/data/filters";
import db from 'firebase' ;

export default createStore({
  state: {
    /* 全体の状態 */
    user: {
      userName: undefined,
      id: undefined,
      isLoggedIn: false,
    },
    step: 1,  // 画面状態
    posts: null, // 投稿データ(ここではjsonを読み込んでいるが，DB連係できると良い)
    filters: mock_filters, // 投稿前のフィルター情報
    /* 投稿情報 */
    uploadImage: "",
    selectedFilter: "",
    inputCaption: ""
  },
  getters: {
    getIsLoggedIn(state){
      return state.user.isLoggedIn;
    },
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
    setIsLoggedIn(state, data){
      state.user.isLoggedIn = data;
    },
    setUserInfo(state, data){
      state.user.userName = data.userName;
      state.user.id = data.userId;
      state.user.profileImage = data.userProfileImage;
      state.user.nickname = data.userNickname;
      state.user.comment = data.userComment;
    },
    setStep(state, data){
      state.step = data;
    },
    setPosts(state, data){
      state.posts = data;
    },
    addPosts(state, data){
      state.posts.unshift(data);
    },
    updateLikedInPost(state, target){
      // DB更新で得た値を設定したほうが良い
      
      // ↓仮記述
      target.hasBeenLiked ? target.likes-- : target.likes++;
      target.hasBeenLiked = !target.hasBeenLiked;
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
    login(context){
      // 本当はここで色々やってから
      context.commit('setIsLoggedIn', true);
    },
    logout(context){
      // ここも色々やってから
      context.commit('setIsLoggedIn', false);
    },
    async initPostData(context){
      //データベースを使う場合など，ここでデータ取得などを行うと良いかも
      const postRef = db.firestore().collection('posts');
      const posts = await postRef.get();
      const post = [];
      posts.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        post.push(doc.data())
      })
      context.commit('setPosts', post);
    },
    resetStepAction(context){
      context.commit('setStep', 1);
      context.commit('setUploadImage', "");
      context.commit('setSelectedFilter', "");
      context.commit('setInputCaption', "");
    },
    sharePostAction(context){
      const postData = {
        username: this.state.user.userName,
        userId: this.state.user.id,
        userImage: "https://api.adorable.io/avatars/285/abott@adorable.png",
        postImage: this.state.uploadImage,
        likes: 0,
        caption: this.state.inputCaption,
        filter: this.state.selectedFilter
      };
      context.commit('setSelectedFilter',postData.filter );
      db.firestore().collection('posts').doc().set(postData);
      context.commit('addPosts', postData);
    },
    
    ImageUrl(context, url){
      this.state.uploadImage = url;
      context.commit('setUploadImage', url);
    },


    likeAction(context, contentId){
      const target = context.state.posts.find((v) => v.id === contentId);
      // DB側の情報更新
      // DB更新後にstateを再読み込みする
      
      // ↓仮記述
      context.commit('updateLikedInPost', target);
    }
  },
  modules: {
  }
})
