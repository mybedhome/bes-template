<script setup>
// // 批量导入所有以.js结尾的文件
const files = require.context('../../assets/icons/', true, /\.svg$/)
files.keys().forEach(files)
import { computed, reactive } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  prefix: {
    type: String,
    default: 'svg-icon'
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 16
  }
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const style = reactive({
  'font-size': props.size + 'px',
  color: props.color
})
</script>

<template>
  <svg aria-hidden="true" class="svg-icon" :style="style">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  margin-right: 5px;
}
</style>
