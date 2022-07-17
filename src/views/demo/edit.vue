<template>
  <div class="edit_wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="时间">
        <el-date-picker v-model="form.date" type="date" placeholder="选择日期" />
      </el-form-item>
      <el-form-item label="部门">
        <el-select v-model="form.departmentId" placeholder="请选择部门" @change="changeDepartment">
          <el-option v-for="{ id, name } in departments" :key="id" :label="name" :value="id" />
        </el-select>
      </el-form-item>
      <el-form-item label="主题域">
        <el-select v-model="form.bizid" placeholder="请选择主题域">
          <el-option v-for="{ id, name } in bizList" :key="id" :label="name" :value="id" />
        </el-select>
      </el-form-item>
      <el-form-item label="姓">
        <el-input v-model="form.firstName" />
      </el-form-item>
      <el-form-item label="名">
        <el-input v-model="form.lastName" />
      </el-form-item>
      <div class="computed_demo">
        <span class="title">全名：</span>
        <span class="full_name">{{ fullName }}</span>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{ (record && record.id) ? '编辑' : '创建' }}</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { departmentList, departmentMap } from './const'

export default {
  name: 'DemoEdit',
  props: {
    record: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      init: true,
      form: {
        name: '',
        bizid: ''
      },
      departments: departmentList,
      bizList: []
    }
  },
  computed: {
    fullName() {
      return `${this.form.firstName || ''}${this.form.lastName || ''}`
    }
  },
  watch: {
    record: {
      handler: function(value) {
        if (this && value && this.init) {
          this.changeDepartment(+value.departmentId)
          this.$set(this, 'form', value)
          this.init = false
        }
      },
      immediate: true,
      deep: true
    }
  },
  destroyed() {
    this.init = true
  },
  methods: {
    changeDepartment(value) {
      this.$set(this.form, 'bizid', void 0)
      this.$set(this, 'bizList', departmentMap.get(+value))
    },
    onSubmit() {
      // this.$message(JSON.stringify(this.form))
      this.$emit('create', this.form)
    },
    cancel() {
      console.log(8888888, '取消')
      this.$emit('callBack')
    }
  }
}
</script>

<style lang="scss" scoped>
.computed_demo {
  margin: 20px 0 20px 50px;
  & > span.title {
    color: #f00;
  }
  & > span.full_name {
    color: #00f;
  }
}
</style>
