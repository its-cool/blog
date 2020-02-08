<template>
  <div class="box">
    <transition name="fade" mode="out-in">
      <div v-if="ifFold" class="navbar flex-column flex-space-between">
        <div class="menu-box flex-none">
          <span class="logo-text">
            <i class="iconfont">&#xe603;</i>
          </span>
          <el-menu
            mode="vertical"
            :router="true"
            :default-active="dashboard"
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
        <div class="tool-box flex-center flex-column">
          <el-tooltip content="搜索" placement="right-end">
            <el-button
              type="icon"
              class="el-icon-search font-size-18"
            ></el-button>
          </el-tooltip>
          <el-tooltip content="友情链接" placement="right-end">
            <el-button
              type="icon"
              class="el-icon-connection margin-no"
            ></el-button>
          </el-tooltip>
        </div>
      </div>
    </transition>
    <el-button
      :class="ifFold ? 'menu-change-btn-enter' : 'menu-change-btn-leave'"
      type="info"
      :icon="ifFold ? 'el-icon-menu' : 'el-icon-menu'"
      circle
      @click.stop="foldNavMenu"
    ></el-button>
  </div>
</template>

<script>
import { subPath } from '@/router';
export default {
  computed: {
    dashboard: function() {
      return this.$route.path || this.menus[0].path;
    }
  },
  data() {
    return {
      menus: [],
      ifFold: true
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
.box {
  position: relative;
  width: $aside-width;
  height: 100%;
  .fade-enter {
    opacity: 1;
    transform: translateX(-80px);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-leave-active {
    opacity: 1;
    transform: translateX(-80px);
  }
  .menu-change-btn-enter {
    position: absolute;
    animation: mymove-right 0.5s;
    background: rgba(20, 27, 31, 0.8);
    left: 110px;
    top: 10px;
    font-size: 14px;
  }
  @keyframes mymove-right {
    from {
      left: 30px;
    }
    to {
      left: 110px;
    }
  }
  .menu-change-btn-leave {
    position: absolute;
    animation: mymove-left 0.5s;
    background: rgba(20, 27, 31, 0.8);
    left: 30px;
    top: 10px;
    font-size: 14px;
  }
  @keyframes mymove-left {
    from {
      left: 110px;
    }
    to {
      left: 30px;
    }
  }
  .navbar {
    width: $aside-width;
    height: 100%;
    background: rgba(20, 27, 31, 0.8);
    color: white;
    .menu-box {
      .logo-text {
        display: block;
        width: 80px;
        height: 80px;
        line-height: 80px;
        color: #ffffff;
        text-align: center;
        .iconfont {
          font-size: 40px;
        }
      }
      .el-menu {
        border-right: none;
      }
    }
    .tool-box {
      /deep/ .el-button {
        background-color: transparent;
        border: none;
        color: #ffffff;
        font-size: 18px;
        margin: 0;
      }
    }
  }
}
</style>
