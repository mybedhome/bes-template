<template>
  <div>
    <TheHeader />
    <div class="content">
      <TheAside />
      <div class="main-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './header/default/TheHeader.vue'
import TheAside from './aside/TheAside.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
.content {
  display: flex;
}
.main-content {
  flex: 1;
}
</style>
