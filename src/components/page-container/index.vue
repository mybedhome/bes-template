<template>
  <div class="page-container">
    <div ref="pageHeader" class="page-header">
      <slot name="header"></slot>
    </div>
    <div class="page-content" :style="{ height: contentHeight }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, Ref } from 'vue'
interface Props {}
// const props = defineProps<Props>()
const pageHeader = ref<HTMLElement | null>(null)

const contentHeight = computed(() => {
  if (pageHeader.value) {
    const navHeight = inject<Ref<number>>('navHeight')
    const h = pageHeader.value.offsetHeight + (navHeight ? navHeight.value : 0)
    return `calc(100vh - ${h}px)`
  }
  return 0
})
</script>

<style scoped>
.page-container {
  background-color: #f0f2f7;
}
.page-header {
  padding: 0 20px;
  line-height: 1;
  background-color: transparent;
}
.page-content {
  overflow-y: auto;
  padding: 0 20px;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
