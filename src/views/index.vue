<template>
  <h1 class="title">index page</h1>
  <div>
    <h2>yes</h2>
    <el-button type="primary">确定</el-button>
    <el-select>
      <el-option value="1">选项一</el-option>
      <el-option value="2">选项二</el-option>
    </el-select>
    <bes-container />
    <router-link to="/table">go table</router-link>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
</script>

<style lang="scss" scoped></style>
