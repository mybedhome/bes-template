<template>
  <div>
    <ul class="fn-button-group">
      <li>
        <SvgIcon name="fullscreen" />
      </li>
      <li>
        <SvgIcon name="tips" />
      </li>
      <li>
        <el-badge :value="100" :max="99">
          <div style="display: flex"><SvgIcon name="notice" /></div>
        </el-badge>
      </li>
      <el-dropdown>
        <li class="user-info">
          <SvgIcon
            name="admin"
            style="width: 28px; height: 28px; margin: 0 3px"
          />
          <SvgIcon name="down" :size="14" style="margin-right: 0" />
        </li>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Admin</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.fn-button-group {
  display: flex;
  align-items: center;
  padding-right: 20px;
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    cursor: pointer;
    &:hover {
      border-radius: 4px;
      background-color: #f5f6fa;
    }
  }
  ::v-deep {
    .ep-badge__content--danger {
      background-color: #ff3535;
    }
    .ep-badge__content {
      padding: 0 4px;
    }
    .ep-badge__content.is-fixed {
      right: 16px;
    }
  }
}
.user-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
}
</style>
