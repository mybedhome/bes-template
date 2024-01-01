<script setup>
import { ref } from 'vue'
import '@/assets/styles/test.css'
import Person from './Person'
const props = defineProps({
  isTest: Boolean
})
const name = ref('test')

console.log('process.env.helo', process.env)
const p = new Person('rose')
const tname = ref(p.getName())
// console.log('p', p.getName())
</script>

<template>
  <h1 class="test-title">{{ tname }} - {{ props.isTest }}</h1>
  <el-button type="primary">按钮</el-button>
</template>

<style lang="scss" scoped>
.test-title {
  color: pink;
  font-size: 24px;
  transform: translateX(100px);
}
</style>
