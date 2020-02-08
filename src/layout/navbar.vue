<template>
  <div class="navbar flex-column flex-space-between">
    <div class="menu-box">
      <span class="logo-text">long</span>
      <el-button
        class="menu-change-btn"
        type="info"
        :icon="ifFold ? 'el-icon-caret-right' : 'el-icon-caret-left'"
        circle
        @click.stop="foldNavMenu"
      ></el-button>
      <el-menu
        mode="horizontal"
        :router="true"
        default-active="dashboard"
        class="el-menu-vertical-demo"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          v-for="item in menus"
          :key="item.path"
          :index="item.path"
          >{{ item.meta.label }}</el-menu-item
        >
      </el-menu>
    </div>
    <div class="tool-box">
      工具条
    </div>
  </div>
</template>

<script>
import { subPath } from '@/router';
export default {
  data() {
    return {
      menus: [],
      ifFold: false
    };
  },
  methods: {
    foldNavMenu() {
      this.ifFold = !this.ifFold;
    }
  },
  created() {
    this.menus = subPath;
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/common-variables.scss';

.navbar {
  width: $aside-width;
  height: 100%;
  background: rgba(20, 27, 31, 0.8);
  color: white;
  .menu-box {
    position: relative;
    .menu-change-btn {
      position: absolute;
      right: -50px;
      top: 10px;
      font-size: 14px;
    }
    .logo-text {
      font-family: 方正舒体;
      font-size: 30px;
      font-weight: 900;
      display: block;
      padding: 10px;
    }
  }

  .tool-box {
  }
}
</style>
