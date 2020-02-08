<template>
  <div class="full flex-center">
    <div class="FL">
      <el-button @click.stop="show = !show">显示文字</el-button>
      <transition name="flod">
        <h2 v-if="show">分类页面</h2>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      show: true
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.FL {
  width: 80%;
  height: 100%;
  min-width: 1000px;
}
</style>
