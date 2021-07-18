<template>
  <div class="vuestagram-post">
    <div class="header level">
      <div class="level-left details">
        <figure class="image is-32x32">
          <img :src="post.userImage">
        </figure>
        <span @click="like" class="username">{{post.username}}</span>
      </div>
    </div>
    <div @dblclick="like">
      <div
        class="image-container"
        :class="post.filter"
        :style="{ backgroundImage: 'url(' + post.postImage + ')' }"
      ></div>
    </div>

    <div class="content">
      <div class="heart">
        <!-- <i class="far fa-heart fa-lg" :class="{'fas': this.post.hasBeenLiked}" @click="like"></i> -->
        <i class="far fa-heart fa-lg false" @click="like"></i>
      </div>
      <p class="likes">{{post.likes}} likes</p>
      <p class="caption">
        <span>{{post.username}}</span>
        {{post.caption}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object
  },
  methods: {
    like() {
      //this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++;
      //this.post.hasBeenLiked = !this.post.hasBeenLiked;
    }
  }
};
</script>

<style>
.vuestagram-post {
  padding-top: 50px;
}

.vuestagram-post ~ .vuestagram-post {
  padding-top: 0px;
}

.vuestagram-post {
  padding: 5px 0;
}
.vuestagram-post .details {
  margin-top: 23px;
}
.vuestagram-post .header {
  height: 30px;
  border-bottom: 1px solid #fff;
  margin: 7.5px 10px;
}
.vuestagram-post .header .image {
  display: inline-block;
}
.vuestagram-post .header img {
  border-radius: 99px;
}
.vuestagram-post .header .username {
  position: relative;
  top: 3px;
  padding-left: 5px;
  font-size: 0.9rem;
  font-weight: bold;
}
.vuestagram-post .level {
  margin-bottom: 0.5rem !important;
}
.vuestagram-post .image-container {
  height: 330px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -1;
}
.vuestagram-post .content {
  margin: 7.5px 10px;
}
.vuestagram-post .far.fa-heart,
.vuestagram-post .fas.fa-heart {
  cursor: pointer;
}
.vuestagram-post .fas.fa-heart {
  color: #f06595;
}
.vuestagram-post .likes {
  margin: 5px 0;
  margin-bottom: 5px !important;
  font-size: 0.85rem;
  font-weight: bold;
}
.vuestagram-post .caption {
  font-size: 0.85rem;
}
.vuestagram-post .caption span {
  font-weight: bold;
}

.vuestagram-post:last-child {
  margin-bottom: 80px;
}
</style>
