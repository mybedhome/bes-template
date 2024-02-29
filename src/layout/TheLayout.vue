<template>
  <header class="header"><TheHeader /></header>
  <div class="content">
    <aside class="aside"><TheAside /></aside>
    <main class="main">
      <div class="container"><RouterView /></div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './header/default/TheHeader.vue'
import TheAside from './aside/TheAside.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 9999;
}
.content {
  display: flex;
  position: relative;
  top: 50px;
}
.aside {
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 50px;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
}
.main {
  flex: 1;
  margin-left: 200px;
}
.container {
  margin: 0 auto;
}
</style>
