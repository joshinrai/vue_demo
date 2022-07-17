<template>
  <div class="guide_wrapper">
    <h2>文档指北</h2>
    <div class="guide_container">
      <section>
        <el-link href="https://cn.vuejs.org/v2/guide/" type="primary" target="_blank">vue官网</el-link>
      </section>
      <section>
        <el-link href="https://router.vuejs.org/zh/introduction.html" type="warning" target="_blank">vue router官网</el-link>
      </section>
      <section>
        <el-link href="https://element.eleme.io" type="success" target="_blank">element UI官网</el-link>
      </section>
      <section>
        <el-link href="https://github.com/PanJiaChen/vue-element-admin.git" type="primary" target="_blank">项目🌰</el-link>
      </section>
      <section>
        <el-link href="https://github.com/joshinrai/vue_demo" type="primary" target="_blank">测验项目项目地址</el-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  data() {
    return {
      driver: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .guide_wrapper {
    padding: 40px 20px;
    .guide_container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
