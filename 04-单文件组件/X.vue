<template>
  <div>
    <h2>X组件</h2>
    <!-- 使用组件 -->
    <X1></X1>
  </div>
</template>

<script>
// 导入组件
import X1 from "./X1.vue";
export default {
  components: {
    // 注册组件
    X1,
  },
};
</script>

<style>
</style>