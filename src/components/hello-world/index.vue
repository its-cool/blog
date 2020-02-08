<template>
  <div class="hello">
    <el-button>{{ msg }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<style scoped></style>
