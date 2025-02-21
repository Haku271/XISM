<template>
  <router-view />
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      document.body.style.setProperty("--el-border-color-lighter", "#D1D5E1");
      document.body.style.setProperty("--el-border-color", "#D1D5E1");
    });
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: PingFangSC-Semibold, PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
