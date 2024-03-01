<template>
  <h1 class="title">index page</h1>
  <div>
    <h2>yes</h2>
    <h3>weight: {{ weight }}</h3>
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
import { ref } from 'vue'
import { useCssVar } from '@vueuse/core'
import { utils } from '@/utils'

const weight = ref(0)
const handleClick = () => {
  document.documentElement.style.setProperty(
    '--ep-menu-horizontal-height',
    '30px'
  )
  weight.value += 10
  const color = useCssVar('--ep-color-primary', null)
  const c = utils.mixColor('#000000', '#BF6610', weight.value)
  console.log('c', c)
  color.value = c
  // document.documentElement.style.setProperty('--ep-color-primary', c)
}
</script>

<style lang="scss" scoped></style>
