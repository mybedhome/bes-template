<template>
  <h1 class="title">index page</h1>
  <div>
    <h2>yes</h2>
    <bes-container />
    <Test></Test>
    <img src="../assets/logo.png" />
    <div>{{ names.join() }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const arr = ref(['rose', 'lucy'])
const names = ref(Array.from(arr.value, (item) => item + '-yes'))
// @ts-ignore
console.log('isTest', window.isTest)
</script>

<style lang="less" scoped>
@color: orange;
.title {
  color: @color;
}
</style>
