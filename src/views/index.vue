<template>
  <h1 class="title">index page</h1>
  <div>
    <h2>yes</h2>
    <el-button type="primary" @click="handleClick">确定</el-button>
    <el-select>
      <el-option value="1">选项一</el-option>
      <el-option value="2">选项二</el-option>
    </el-select>
    <bes-container />
    <img src="../assets/logo.png" />
    <router-link to="/table">go table</router-link>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import { useCssVar } from '@vueuse/core'
const handleClick = () => {
  document.documentElement.style.setProperty(
    '--ep-menu-horizontal-height',
    '30px'
  )
  const color = useCssVar('--ep-color-primary', null)
  color.value = 'red'
  // document.documentElement.style.setProperty('--ep-color-primary', 'orange')
}
</script>

<style lang="scss" scoped></style>
