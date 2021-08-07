<template>
  <router-view/>
</template>

<style>
html, body, #app {
  width:100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: #ebe7bb;
  font-family: "Roboto", sans-serif;
}

#app {
  display: flex;
  justify-content: center;
}

@media (max-width: 520px) {
  #app {
    height: 100% !important;
    padding-top: 0 !important;
  }
}
</style>
