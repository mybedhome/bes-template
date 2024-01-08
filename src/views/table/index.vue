<template>
  <div class="box">
    <el-table :data="tableData" border>
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="name" label="年龄" width="180" />
      <el-table-column prop="name" label="班级" />
      <el-table-column prop="name" label="年级" width="180" />
      <el-table-column
        prop="name"
        label="操作"
        width="180"
        :resizable="false"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎'
        },
        {
          date: '2016-05-02',
          name: '刘德华'
        }
        // 更多数据...
      ]
    }
  }
}
</script>

<style>
body[style*='col-resize'] {
  cursor: default !important;
  background: orange;
}
.el-table th:not(:last-of-type) .cell:hover::after {
  background-color: rgba(0, 0, 255, 0.5) !important; /* 拖拽把手的颜色 */
  width: 2px !important; /* 拖拽把手的宽度 */
}
</style>

<style scoped lang="scss">
.box {
  padding: 100px;
}

body[style*='col-resize'] {
  .el-table thead th:not(:last-of-type)::after {
    background-color: #4b6eef !important;
    width: 2px;
  }
}
::v-deep {
  .el-table th.el-table__cell.is-leaf {
    border-bottom: none;
  }
  .el-table--border .el-table__cell {
    border-right: none;
  }
  .el-table thead th {
    position: relative;
  }

  .el-table thead th:not(:last-of-type)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 10px; /* 上间距 */
    bottom: 10px; /* 下间距 */
    width: 1px;
    background-color: red; /* 分割线颜色 */
    z-index: 100;
    cursor: col-resize;
  }
  .el-table thead th:not(:last-of-type):hover::after {
    width: 2px;
    background-color: blue !important;
  }

  .el-table th .cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-table .gutter {
    display: block;
    position: absolute;
    top: 10px; /* 与分割线上间距一致 */
    bottom: 10px; /* 与分割线下间距一致 */
    right: -5px;
    width: 10px; /* 拖动把手的宽度 */
    cursor: col-resize;
  }
}
/* 移除表格边框 */

/* 表头分割线样式 */

/* 调整列宽拖动的把手位置 */
</style>
