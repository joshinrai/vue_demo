<template>
  <div class="demo_wrapper">
    <div v-if="type === 'view'">
      <section class="title_wrapper">
        <h2>demo</h2>
        <el-button type="primary" size="small" @click="handleClick(null)">新增</el-button>
      </section>
      <el-table :data="tableData" border>
        <el-table-column
          fixed
          prop="date"
          label="日期"
        />
        <el-table-column
          fixed
          prop="department"
          label="部门"
        />
        <el-table-column
          fixed
          prop="bizName"
          label="主题域"
        />
        <el-table-column
          fixed
          prop="name"
          label="姓名"
        />
        <el-table-column
          fixed="right"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button type="danger" size="small" @click="delRecord(scope.row)">删除</el-button>
            <el-button type="primary" size="small" @click="handleClick(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-else-if="type === 'edit'">
      <edit :record="current" @callBack="callBack" @create="createNewRecord" />
    </div>
  </div>
</template>

<script>
import Edit from './edit.vue'
import { tableList, departmentList } from './const'

export default {
  name: 'Demo',
  components: { Edit },
  data() {
    return {
      type: 'view',
      current: null,
      tableData: tableList
    }
  },
  mounted() {

  },
  methods: {
    delRecord(row) {
      const index = this.tableData.findIndex(({ id }) => +id === +row.id)
      const list = JSON.parse(JSON.stringify(this.tableData))
      list.splice(index, 1)
      this.$set(this, 'tableData', list)
    },
    handleClick(row) {
      this.current = row
      this.type = 'edit'
    },
    createNewRecord(row) {
      const list = JSON.parse(JSON.stringify(this.tableData))
      const date = new Date(row.date)
      if (row.id) {
        const index = this.tableData.findIndex(({ id }) => +id === +row.id)
        list.splice(index, 1, {
          ...row,
          date: date.getFullYear(), // typeof row.date !== 'object' ? row.date : row.date.getFullYear(),
          name: `${row.firstName}${row.lastName}`
        })
      } else {
        const index = this.tableData.reduce((min, { id }) => ((+id > min) ? id : min), 0)
        const item = departmentList.find(({ id }) => +id === +row.departmentId)
        list.unshift({
          ...row,
          date: date.getFullYear(), // typeof row.date !== 'object' ? row.date : row.date.getFullYear(),
          name: `${row.firstName}${row.lastName}`,
          id: (+index + 1),
          department: item.name,
          bizName: item.children.find(({ id }) => +row.bizid === +id).name
        })
      }
      this.$set(this, 'tableData', list)
      this.type = 'view'
      this.$message.success(`${row.id ? '编辑' : '新增'}成功`)
    },
    callBack() {
      this.type = 'view'
    }
  }
}
</script>

<style lang="scss" scoped>
  .demo_wrapper {
    margin-top: 40px;
    padding: 20px;
    .title_wrapper {
      display: flex;
      justify-content: space-between;
      & > .el-button {
        height: 32px;
      }
    }
  }
</style>
