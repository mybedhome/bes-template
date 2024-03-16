<template>
  <header ref="navRef" class="header"><TheHeader /></header>
  <aside class="aside"><TheAside /></aside>
  <main class="main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import TheHeader from './header/default/TheHeader.vue'
import TheAside from './aside/TheAside.vue'
import { RouterView } from 'vue-router'
import { ref, onMounted, provide } from 'vue'

const navRef = ref<HTMLElement | null>(null)
const navHeight = ref(0)
provide('navHeight', navHeight)
onMounted(() => {
  if (navRef.value) {
    navHeight.value = navRef.value.offsetHeight
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: $nav-height;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.aside {
  width: 200px;
  position: fixed;
  top: $nav-height;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
}
.main {
  margin-left: 200px;
  margin-top: $nav-height;
  height: calc(100% - $nav-height);
  overflow-y: auto;
}
</style>
