<template>
  <h1 class="title">index page</h1>
  <div>
    <h2>yes</h2>
    <bes-container />
    <img src="../assets/logo.png" />
    <router-link to="/table">go table</router-link>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
</script>

<style lang="less" scoped>
@color: orange;
.title {
  color: @color;
}
</style>
