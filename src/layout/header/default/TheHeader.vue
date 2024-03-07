<template>
  <div class="the-header">
    <HeaderLogo />
    <HeaderNav />
  </div>
</template>

<script setup lang="ts">
import HeaderNav from './HeaderNav.vue'
import HeaderLogo from './HeaderLogo.vue'
</script>

<style scoped>
.the-header {
  display: flex;
  align-items: center;
}
</style>
