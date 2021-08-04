<template>
  <div class="profile">
    <h1>This is an profile</h1>
    <button @click="tameshi">TAMESHI</button>
  </div>
</template>

<script>
export default {
  name: 'profile',
  methods: {
    login() {
      //this.$store.dispatch('tameshi');
      this.$router.push('/');
    }
  }
   //kouta
}
</script>