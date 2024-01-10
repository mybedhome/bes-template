<template>
  <div class="box">
    <el-table :data="tableData" border ref="tableRef">
      <el-table-column
        width="180"
        v-for="col in columns"
        :key="col.prop"
        v-bind="col"
      >
        <template #header>
          <div class="bes-column">
            <span>{{ col.label }}</span>
            <span
              class="resizer"
              :class="{ 'resizer-pressed': col.pressed }"
              :ref="(el) => onMousePressed(el as Element, col)"
            ></span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180" :resizable="false" />
    </el-table>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TableView'
}
</script>
<script setup lang="ts">
import { useMousePressed } from '@vueuse/core'
import { Ref, onMounted } from 'vue'
import { ref } from 'vue'
const tableRef = ref(null)
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

const columns = ref([
  {
    label: '日期',
    prop: 'date',
    pressed: null
  },
  {
    label: '姓名',
    prop: 'name',
    pressed: null
  },
  {
    label: '年龄',
    prop: 'age',
    pressed: null
  },
  {
    label: '班级',
    prop: 'class',
    pressed: null
  }
])

const onMousePressed = (el: Element, col: { pressed: Ref<boolean> | null }) => {
  if (col.pressed === null) {
    const { pressed } = useMousePressed({
      target: el as HTMLElement,
      touch: false
    })
    col.pressed = pressed
  }
}

onMounted(() => {})
</script>

<style>
body[style*='col-resize'] {
  cursor: default !important;
}
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
.resizer-pressed {
  width: 2px;
  background-color: #4b6eef;
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
