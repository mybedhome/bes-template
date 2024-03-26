<template>
  <div class="the-header">
    <HeaderLogo />
    <HeaderNav />
    <FunctionButton />
  </div>
</template>

<script setup lang="ts">
import HeaderNav from './HeaderNav.vue'
import HeaderLogo from './HeaderLogo.vue'
import FunctionButton from './FunctionButton.vue'
</script>

<style scoped>
.the-header {
  display: flex;
  align-items: center;
}
</style>
