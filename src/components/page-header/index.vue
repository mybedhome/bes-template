<template>
  <div class="header">
    <div class="title">
      <SvgIcon name="tips" />
      <span>新建工单</span>
    </div>
    <div class="button-group">
      <el-button type="primary">新建</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  .title {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
