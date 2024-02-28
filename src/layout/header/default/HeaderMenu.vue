<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">item one</el-menu-item>
      <el-menu-item index="2">item two</el-menu-item>
      <el-menu-item index="3">item three</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')

const handleSelect = () => {}
</script>

<style scoped></style>
