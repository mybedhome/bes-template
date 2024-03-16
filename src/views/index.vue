<template>
  <page-container>
    <!-- <template #header> -->
    <page-header></page-header>
    <!-- </template> -->
    <group>
      <!-- <template #title><h1 class="title">index page</h1></template> -->
      <div>
        <h2>yes</h2>
      </div>
      <div style="height: 700px"></div>
      <div>底下的内容</div>
    </group>
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
