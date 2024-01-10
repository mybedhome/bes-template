<template>
  <div class="box">
    <el-table :data="tableData" border ref="tableRef">
      <el-table-column type="selection" width="55" />
      <el-table-column
        width="180"
        v-for="col in columns"
        :key="col.prop"
        v-bind="col"
      >
        <template #header>
          <!-- <div class="bes-column">
            <span>{{ col.label }}</span>
           
          </div> -->
          {{ col.label }}
          <span
            class="resizer"
            :class="{ 'resizer-pressed': col.pressed }"
            :ref="(el) => onMousePressed(el as Element, col)"
          ></span>
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
    sortable: true,
    pressed: null,
    filters: [{ text: '2016-06-02', value: '2016-06-02' }]
  },
  {
    label: '姓名',
    prop: 'name',
    sortable: true,
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
::v-deep th.el-table__cell.is-sortable {
  cursor: pointer !important;
}

.box {
  padding: 100px;
}

.resizer {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  cursor: col-resize;
  height: calc(100% - 20px);
  border-right: 1px solid #dfe2e7;
  user-select: none;
  z-index: 9;
  &:hover {
    border-right: 2px solid #4b6eef;
  }
}
.resizer-pressed {
  width: 3px;
  border-right: 2px solid #4b6eef;
}

::v-deep {
  .el-table--border .el-table__cell {
    border-right: none;
  }
  th.el-table__cell {
    padding: 0;
    height: 40px;
    background-color: #f3f5fc;
  }
  th.el-table__cell .cell {
    height: 100%;
    line-height: 40px;
    // padding: 0;
  }
}
</style>
