<template>
  <page-container>
    <template #header>
      <page-header></page-header>
    </template>
    <div>
      <h1 class="title">index page</h1>
      <div>
        <h2>yes</h2>
      </div>
      <div style="height: 700px"></div>
      <div>底下的内容</div>
    </div>
  </page-container>
</template>

<script setup>
import { ref } from 'vue'
import { useCssVar } from '@vueuse/core'
import { utils } from '@/utils'
</script>

<style lang="scss" scoped>
.title {
  padding: 16px 0;
  font-size: 20px;
  font-weight: 500;
}
</style>
