<template>
  <div class="auth">
    <h1>This is an login page</h1>
    <button @click="login">LOG IN</button>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  methods: {
    login() {
      this.$store.dispatch('login');
      this.$router.push('/');
    }
  }
}
</script>