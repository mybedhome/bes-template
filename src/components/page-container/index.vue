<template>
  <div class="page-container">
    <div class="page-header"><slot name="header"></slot></div>
    <div class="page-content"><slot></slot></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page-container {
  /* padding: 20px; */
  /* height: 100%; */
}
.page-header {
  background-color: transparent;
  line-height: 1;
  /* position: absolute; */
}
.page-content {
  /* height: 100%; */
  /* padding-top: 68px; */
}
</style>
