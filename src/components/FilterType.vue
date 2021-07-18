<template>
  <div class="filter-type">
    <p>{{filter.name}}</p>
    <!-- styling coming from cssgram -->
    <div
      class="img"
      :class="filter.name"
      :style="{ backgroundImage: 'url(' + image + ')' }"
      @click="selectedFilter"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FilterType",
  props: {
    filter: Object,
    image: String
  },
  methods: {
    selectedFilter() {
      this.$store.commit('setSelectedFilter', { filter: this.filter.name })
    }
  }
};
</script>

<style scoped>
.filter-type {
  width: 100px;
  display: inline-block;
  margin: 0 3px;
}
.filter-type p {
  font-size: 11px;
  text-align: center;
  text-transform: capitalize;
  padding-bottom: 5px;
}
.filter-type .img {
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center center;
}

.filter-type:last-child {
  margin-right: 20px;
}
</style>
