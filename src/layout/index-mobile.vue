<template>
  <el-container class="layout">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-main>
        <router-view v-slot="{ Component }">
          <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
        </router-view>
        <Footer />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import Header from "./Header/index-mobile.vue";
import Footer from "./Footer/index-mobile.vue";

defineOptions({
  name: "LayoutPage",
});
</script>
<style lang="scss" scoped>
.layout {
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  // height: 100%;
  overflow: hidden;
  background-color: #fff;

  .el-header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
    height: 194px;
    z-index: 999;
  }
  .el-main {
    padding: 0;
    background: $color-bg;
  }
}
</style>
