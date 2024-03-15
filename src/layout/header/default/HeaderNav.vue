<template>
  <div class="header-nav">
    <el-menu
      class="bes-menu-default"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <svg-icon name="layout"></svg-icon>工作台</el-menu-item
      >
      <el-menu-item index="2">
        <svg-icon name="detect"></svg-icon>工作流</el-menu-item
      >
      <el-menu-item index="3">
        <svg-icon name="layout"></svg-icon>基础设置</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')

const handleSelect = () => {}
</script>

<style scoped>
.header-nav {
  flex: 1;
}
</style>
