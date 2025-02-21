<template>
  <div class="header-container">
    <div class="logo" @click="goHome"></div>
    <div class="nav">
      <el-dropdown popper-class="menu-dropdown">
        <span class="el-dropdown-link">
          <img src="../../assets/imgs/icon-menu.png" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              class="nav-item"
              :class="defaultActive === item.path && 'nav-item-active'"
              v-for="item in navList"
              :key="item.name"
              @click="selectMenu(item)"
              >{{ item.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

defineOptions({
  name: "HeaderPage",
});

const route = useRoute();
const router = useRouter();

const navList = [
  { name: "Home", path: "/Home" },
  { name: "Products", path: "/Products" },
  { name: "About", path: "/About" },
  { name: "Case Studies", path: "/CaseStudies" },
  { name: "Contact", path: "/Contact" },
];

const defaultActive = ref("/Home");

watch(
  () => route.path,
  (value) => {
    defaultActive.value = value;
  },
  {
    immediate: true,
  }
);

const selectMenu = (record = {}) => {
  router.push({
    path: record.path,
  });
};

const goHome = () => {
  router.push({
    path: "/Home",
  });
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  padding: 0.06rem 0.2rem;
  width: 100%;
  height: 0.94rem;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .logo {
    width: 1.54rem;
    height: 0.82rem;
    background: url("../../assets/imgs/logo.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .nav {
    img {
      width: 0.3rem;
      height: 0.28rem;
    }
  }
}
</style>

<style lang="scss">
.menu-dropdown {
  .el-dropdown-menu {
    border-radius: 0.12rem;
    background: rgba(255, 255, 255, 0.8);
  }
  .el-dropdown-menu__item {
    width: 1.6rem;
    height: 0.46rem;
    font-size: 0.16rem;
    font-weight: 600;
    font-family: Poppins;
    line-height: 0.22rem;
    color: rgba(71, 71, 71, 1);
    justify-content: center;
  }
  .nav-item-active {
    color: rgba(64, 224, 208, 1);
    background: rgba(255, 255, 255, 1);
    border-radius: 2.48rem;
  }
}
.el-popper.is-light {
  background: transparent;
  border: none;
}
</style>
