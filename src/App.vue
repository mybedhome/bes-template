<template>
  <el-config-provider :namespace="namespace">
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="$route.path" />
    </router-view>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { utils } from './utils'
export default defineComponent({
  name: 'App',
  data() {
    return { namespace: 'ep' }
  },
  created() {
    const c = getComputedStyle(document.documentElement).getPropertyValue(
      '--testColor'
    )
    if (c || window.g.THEME_COLOR) {
      this.setThemeColor(c || window.g.THEME_COLOR)
    }
  },
  methods: {
    setThemeColor(color: string) {
      const primaryColorVar = `--${this.namespace}-color-primary`
      document.documentElement.style.setProperty(primaryColorVar, color)
      for (let i = 1; i < 10; i++) {
        const mixColor = utils.mixColor('#ffffff', color, i * 10)
        document.documentElement.style.setProperty(
          `${primaryColorVar}-light-${i}`,
          mixColor
        )
      }
      document.documentElement.style.setProperty(
        `${primaryColorVar}-dark-2`,
        utils.mixColor('#ffffff', color, 20)
      )
    }
  }
})
</script>
