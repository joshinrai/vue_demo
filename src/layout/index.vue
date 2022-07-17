<template>
  <div class="app-wrapper">
    <section class="side_bar">
      <div class="bar_name">侧边导航栏</div>
      <ul class="bar_items">
        <li
          v-for="({ name, path }) in routeList"
          :key="path"
          :class="{'active': path === activePath }"
          @click="switchRoute(path)"
        >
          <span>{{ name }}</span>
        </li>
      </ul>
    </section>

    <app-main />
  </div>
</template>

<script>
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  components: { AppMain },
  data: () => {
    return {
      activePath: 'guide',
      routeList: [{
        name: '开发指北',
        path: 'guide'
      }, {
        name: 'demo',
        path: 'demo'
      }, {
        name: '测验',
        path: 'test'
      }]
    }
  },
  mounted() {
    this.activePath = this.$route.name
  },
  methods: {
    switchRoute(path) {
      this.activePath = path
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }

    & > .side_bar {
      height: 100%;
      width: 260px;
      background-color: rgb(48, 65, 86);
      color: rgb(191, 203, 217);
      padding: 20px 10px;;
      & > .bar_name {
        font-size: 22px;
        color: #f1f1f1;
      }
      & > ul.bar_items {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        gap: 20px;
        & > li {
          cursor: pointer;
        }
        & > li.active {
          color: rgb(64, 158, 255);
        }
      }
    }
  }
</style>
