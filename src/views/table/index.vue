<template>
  <div class="box">
    <el-table
      :data="tableData"
      border
      ref="tableRef"
      @header-dragend="handleHeaderDragend"
    >
      <el-table-column prop="date" label="日期" width="180">
        <template #header>
          <div class="bes-column">
            <span>日期</span>
            <span class="resizer"></span>
          </div>
        </template>
      </el-table-column>
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
  name: 'TableView'
}
</script>
<script setup>
import { useEventListener } from '@vueuse/core'
import { watch } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
const tableRef = ref(null)
const canResize = ref(false)
const draging = ref(false)
const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎'
  },
  {
    date: '2016-05-02',
    name: '刘德华'
  }
])

watch(tableRef, (table) => {
  if (table) {
    console.log('state', table)
  }
})

const handleHeaderDragend = () => {
  draging.value = true
}
onMounted(() => {})
</script>

<style>
body[style*='col-resize'] {
  cursor: default !important;
}
/* .el-table th:not(:last-of-type) .cell:hover::after {
  background-color: rgba(0, 0, 255, 0.5) !important;
  width: 2px !important;
} */
</style>

<style scoped lang="scss">
.box {
  padding: 100px;
}

.bes-column {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;
}
.resizer {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  cursor: col-resize;
  height: calc(100% - 20px);
  background-color: red;
  user-select: none;
  &:hover {
    width: 2px;
    background-color: #4b6eef;
  }
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
  // .el-table--border .el-table__cell {
  //   border-right: none;
  // }
  .el-table thead th {
    position: relative;
  }
  th.el-table__cell {
    padding: 0;
    height: 40px;
  }
  th.el-table__cell .cell {
    height: 100%;
    padding: 0;
  }
  // .el-table .cell {
  //   padding: 0;
  // }
}
</style>
