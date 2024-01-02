<template>
  <el-config-provider>
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="$route.path" />
    </router-view>
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import '@/assets/styles/common.css'
export default defineComponent({
  name: 'App'
})
</script>
