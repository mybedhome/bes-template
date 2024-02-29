<template>
  <header class="header-block"><TheHeader /></header>
  <div class="content-block">
    <aside class="aside-block"><TheAside /></aside>
    <main class="main-block">
      <RouterView :key="$route.path" />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './header/default/TheHeader.vue'
import TheAside from './aside/TheAside.vue'
import { RouterView } from 'vue-router'
console.log('process.env', process.env.NODE_ENV)
</script>

<style scoped>
.header-block {
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 9999;
}
.content-block {
  display: flex;
  position: relative;
  top: 50px;
}
.aside-block {
  display: inline-block;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
}
.main-block {
  flex: 1;
}
</style>
