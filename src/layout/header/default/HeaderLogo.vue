<template>
  <div class="logo-box">
    <img class="logo" :src="logo" />
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/header-logo.svg'
</script>

<style scoped lang="scss">
.logo-box {
  display: flex;
  align-items: center;
  height: 100%;
  .logo {
    max-width: 240px;
    min-width: 200px;
    transform: translateX(20px);
  }
}
</style>
