<template>
  <el-dialog
    v-model="dialogVisible"
    title="个人信息"
    width="400px"
    :append-to-body="true"
  >
    <el-form :model="user" label-position="left" label-width="60px">
      <el-form-item label="用户名">
        <div>{{ user.userName }}</div>
      </el-form-item>
      <el-form-item label="手机号">
        <div>{{ user.phone }}</div>
      </el-form-item>
      <el-form-item label="邮箱">
        <div>{{ user.email }}</div>
      </el-form-item>
      <el-form-item label="备注">
        <div>{{ user.des }}</div>
      </el-form-item>
    </el-form>
  </el-dialog>
  <div class="app-header">
    <div class="app-header-logo">
      <img :src="logo" class="logo" />
    </div>
    <div class="app-header-nav">
      <ul class="app-header-nav-block">
        <li
          class="app-header-nav-item"
          :class="{ 'active-nav': route.path.includes('detect-center') }"
          @click="$routerPush({ name: 'detect-center' })"
        >
          <bes-icon name="layout"></bes-icon>
          <span class="app-header-nav-text">探测中心</span>
        </li>
        <li
          class="app-header-nav-item"
          :class="{ 'active-nav': route.path.includes('detect-settings') }"
          @click="$routerPush({ name: 'detect-settings' })"
        >
          <bes-icon name="detect"></bes-icon>
          <span class="app-header-nav-text">探测设置</span>
        </li>
        <li
          class="app-header-nav-item"
          :class="{ 'active-nav': route.path.includes('system-settings') }"
          @click="$routerPush({ name: 'system-settings' })"
        >
          <bes-icon name="settings"></bes-icon>
          <span class="app-header-nav-text">系统设置</span>
        </li>
      </ul>
    </div>
    <div class="app-header-btn-group">
      <a class="app-header-icon-btn help-icon"> </a>
      <a class="app-header-icon-btn warning-icon"> </a>
      <a class="app-header-icon-btn skin-icon"> </a>
      <a class="app-header-icon-btn fullscreen-icon"> </a>
      <a class="app-header-icon-btn license-icon"> </a>
      <el-dropdown>
        <div class="avatar-block">
          <a class="app-header-icon-btn avatar-icon"> </a>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="dialogVisible = true"
              >个人信息</el-dropdown-item
            >
            <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/images/header-logo.svg'

import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const dialogVisible = ref(false)
const route = useRoute()
const user = ref({})
const logout = () => {
  const projectPackage = localStorage.getItem('projectPackage')
  router.push({
    name: 'login',
    query: projectPackage ? { projectPackage } : {}
  })
}
onMounted(async () => {})
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  margin: 0 10px 0 var(--app-layout-gutter);
  height: 50px;
  &-logo {
    display: flex;
    align-items: center;
    width: 240px;
    .logo {
      width: 100%;
      height: 100%;
    }
  }
  &-nav {
    display: flex;
    flex: 1;
    &-block {
      display: flex;
      align-items: center;
      .app-header-nav-item {
        display: flex;
        align-items: center;
        color: var(--app-text-color-primary);
        margin-right: 40px;
        cursor: pointer;
        .app-header-nav-text {
          font-size: 14px;
          margin-left: 10px;
        }
      }
      .active-nav,
      .app-header-nav-item:hover {
        color: var(--app-color-primary);
      }
    }
  }
  &-btn-group {
    min-width: 210px;
    // border: 1px solid gray;
  }
}

.app-header-icon-btn {
  display: flex;
  width: 14px;
  height: 14px;
  margin-right: var(--app-layout-gutter);
  cursor: pointer;
}
.app-header-btn-group {
  display: flex;
  align-items: center;
  .help-icon {
    background: url('@/assets/images/icons/help.svg') no-repeat;
    background-size: 100%;
  }
  .warning-icon {
    background: url('@/assets/images/icons/warning.svg') no-repeat;
    background-size: 100%;
  }
  .skin-icon {
    background: url('@/assets/images/icons/skin.svg') no-repeat;
    background-size: 100%;
  }
  .fullscreen-icon {
    background: url('@/assets/images/icons/fullscreen.svg') no-repeat;
    background-size: 100%;
  }
  .license-icon {
    background: url('@/assets/images/icons/license.svg') no-repeat;
    background-size: 100%;
  }
  .avatar-block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--app-color-primary);
  }
  .avatar-icon {
    background: url('@/assets/images/icons/avatar.svg') no-repeat;
    background-size: 100%;
    margin: 0;
  }
}
</style>
