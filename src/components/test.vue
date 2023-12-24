<script setup>
import { ref } from 'vue'
const name = ref('test')
</script>

<template>
  <h1>{{ name }}</h1>
  <el-button type="primary">按钮</el-button>
</template>
