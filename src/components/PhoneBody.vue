<template>
  <div class="phone-body">
    <div v-if="step === 1" class="feed" v-dragscroll.y>
      <post v-for="post in posts" :post="post" :key="posts.indexOf(post)"></post>
    </div>
    <div v-if="step === 2">
      <div
        class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div class="filter-container" v-dragscroll.x>
        <filter-type
          v-for="filter in filters"
          :filter="filter"
          :image="image"
          :key="filters.indexOf(filter)"
        ></filter-type>
      </div>
    </div>
    <div v-if="step === 3">
      <div
        class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div class="caption-container">
        <textarea
          class="caption-input"
          placeholder="Write a caption..."
          type="text"
          :value="value"
          @input="$emit('input', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>


<script>
import Post from "./Post";
import FilterType from "./FilterType";

export default {
  name: "PhoneBody",
  components: {
    post: Post,
    "filter-type": FilterType
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
};
</script>

<style scoped>
.phone-body {
  height: 100%;
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

.filter-container {
  width: 100%;
  position: relative;
  height: 220px;
  padding: 30px 10px;
  white-space: nowrap;
  overflow-x: scroll;
}
</style>
