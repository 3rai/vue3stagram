<template>
  <router-view/>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: #e6ecf1;
  font-family: "Roboto", sans-serif;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 520px) {
  #app {
    height: 100% !important;
    padding-top: 0 !important;
  }
}
</style>
