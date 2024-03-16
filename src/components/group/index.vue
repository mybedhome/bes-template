<template>
  <div v-if="props.isWrap" class="group">
    <div v-if="props.title || slots.title" class="group-title">
      <span v-if="props.title">{{ props.title }}</span>
      <slot v-else name="title"></slot>
    </div>
    <div><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, reactive, useSlots } from 'vue'
interface Props {
  title?: string
  isWrap?: boolean
}
const props = withDefaults(defineProps<Props>(), { title: '', isWrap: true })
const slots = useSlots()
console.log('slots', slots)
const state = reactive({})
</script>

<style scoped>
.group {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #fff;
}
</style>
