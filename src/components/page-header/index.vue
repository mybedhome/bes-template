<template>
  <div v-if="isShowHeader" class="header">
    <div class="title">
      <template v-if="props.showBack">
        <SvgIcon name="back" :size="26" color="#555758" class="back-icon" />
        <divider></divider>
      </template>
      <span>{{ props.title }}</span>
    </div>
    <div class="button-group">
      <el-button type="primary">新建</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  title: string
  showBack?: boolean
  showHeader?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  showBack: false,
  showHeader: true
})

const route = useRoute()

const isShowHeader = computed(() => {
  return props.showHeader && route.query.hideHeader !== 'true'
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  .title {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
  }
}
.back-icon {
  margin-right: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
}
</style>
