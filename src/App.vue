<template>
  <el-config-provider namespace="ep">
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="$route.path" />
    </router-view>
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
